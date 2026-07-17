# Master DSA — Technical Audit & Firebase → Supabase Migration Report

**Scope:** full audit of the production app (243 registered users), root-cause analysis of the cross-device progress bug, redesigned Supabase/PostgreSQL backend, zero-data-loss migration with duplicate-e-mail merging, and a production-ready application rewrite.

**Non-negotiables honored:** Firebase data is never written to, never deleted, and remains fully intact as the rollback path. The migration is read-only against Firebase and idempotent against Supabase.

---

## 1. Root Cause Analysis

The bug — *"the same Google account sees different progress on different browsers"* — is not one bug. It is four independent mechanisms in the current code that each produce divergence, compounding each other. All four were found in the codebase, not guessed.

### 1a. Fractured identity: one Gmail, multiple user records (primary cause)

Firestore documents are keyed by Firebase Auth `uid` (`users/{uid}`, `AuthContext.jsx:43`). That is only safe if one Google account maps to one `uid` forever. Your production history shows it did not:

* Your own admin allow-list contains **two different UIDs for yourself**: `ADMIN_UIDS = ['JROhXIAevXfsMos9qTTXcpf92vD2', 'kcFyQ6WdW9VBxUnCMt1NIBzJRyL2']` (`AdminDashboard.jsx:12`, duplicated in `Header.jsx`). Two UIDs for one person is direct in-repo evidence that the same Gmail produced different Firebase UIDs at different times (an auth user deleted/recreated, or the earlier "create multiple accounts per identity provider" linking mode).
* The admin dashboard screenshot shows **two `users` documents with the identical e-mail** `kamalsnitkkr@gmail.com` — one with 245 solved (online), one with 17 solved (offline) — while Firebase Authentication currently holds only **one** auth user for that e-mail. The 17-solved document is an orphan keyed by a dead UID.

Consequence: a browser holding an old persisted session (or a user whose auth record was recreated) reads and writes `users/{oldUid}` while a fresh sign-in elsewhere uses `users/{newUid}`. Same Gmail, two disjoint progress stores — exactly the reported symptom. Nothing in Firestore enforces e-mail uniqueness across documents, so once split, the data never heals.

### 1b. localStorage treated as a co-equal source of truth

On every login, `ProgressContext.jsx` merges three sources: cloud data, `localStorage['dsaTrackerProgress:{uid}']`, **and the legacy shared key `localStorage['dsaTrackerProgress']`** (`readStoredProgress`, lines 118-125). The merged result is then **written back to the cloud** (line 450-458). So:

* Progress from another person (or guest usage) on a shared machine leaks into whoever signs in next, then gets uploaded as theirs.
* A browser that hasn't been opened for months injects months-old state into the merge on next login.

### 1c. "Zombie" resurrection from OR-merge semantics

`mergeQuestionProgress` (lines 40-60) resolves ties (both sides `updatedAt: 0`, true for all legacy data) by **OR-ing** solved/revision flags. Un-ticking a question on device A is undone the next time device B — still holding the old "solved" copy — logs in, union-merges, and pushes the merge back to the cloud. Progress visibly flip-flops between devices.

### 1d. Dual unsynchronized collections + fetch-once staleness

Every write stores the **entire progress blob twice** — `users/{uid}` and `userProgress/{uid}` — via `Promise.allSettled`, and reports success if **either** write lands (`saveProgressToCloud`, lines 288-293). The two copies drift apart silently (the audit script measures this drift). Reads merge both, amplifying 1c. Additionally, `fetchedForUid` (line 323) means cloud data is fetched **once per browser session** — a tab left open never sees writes from other devices until manually reloaded, and there are no realtime listeners.

**Verdict:** identity is fractured at the key level (1a), and even for a single stable UID the client-side merge architecture (1b, 1c, 1d) guarantees eventual divergence between browsers. A schema change alone would not fix it; the fix requires a database-enforced identity (`UNIQUE email`), per-question rows instead of blob merging, and server-authoritative reads — all delivered below.

---

## 2. Architecture Review (as found)

React 18 + Vite SPA; Firebase Auth (Google popup); Firestore accessed directly from the browser; no backend of any kind; no `firestore.rules` in the repo (rules exist only in the console — unauditable and unversioned); admin gating done client-side by comparing `user.uid` against hardcoded arrays; the entire `users` collection is downloaded to the browser for the admin page; presence heartbeat writes `lastSeenAt` every 5 minutes; analytics via Firebase Analytics; signup notification via a Web3Forms call with a placeholder API key committed to the client bundle; user geolocation fetched from `ipapi.co` client-side.

Data files (6 sheets, 1,418 questions, verified unique slugs: a2z 455, SDE 191, blind75 75, neetcode150 150, neetcode250 250, striver_cp 297) are static JSONs served from `/public/data` — this part is sound and is retained.

## 3. Existing Schema Review

`users/{firebaseUid}`: identity fields + `progress` — a doubly-nested map `{sheetId: {questionSlug: {status, revision, note, updatedAt}}}` — plus legacy variants living side by side in production: flat booleans at the top level (oldest format), a separate flat `revision` map, A2Z questions filed under wrong sheet buckets ("scattered"), and single question objects as top-level keys. `userProgress/{firebaseUid}`: a full copy of the same payload. `totalSolved` denormalized in both.

Structural problems: no uniqueness on e-mail; whole-blob rewrite on every checkbox tick (~100-500 KB × 2 documents per tick); merge logic forced client-side; four coexisting formats requiring migration code in the render path (`migrateToNewFormat`, `consolidateA2ZProgress` run on login *and* in the admin dashboard); no history, no per-day activity, no way to query "who solved X" without downloading everyone.

## 4-5. Problems Found & Severity

| # | Problem | Where | Severity |
|---|---------|-------|----------|
| P1 | Same Gmail → multiple user records; orphaned-UID documents split progress | Firestore keys + auth history (§1a) | **Critical** |
| P2 | localStorage merged into cloud as a source of truth; legacy shared key leaks progress across accounts on one machine | `ProgressContext.readStoredProgress` | **Critical** |
| P3 | Admin authorization is client-side only; any signed-in user can read the whole `users` collection (243 users' e-mails, names, photos, locations) with the public Firebase config | `AdminDashboard.jsx`, Firestore rules | **Critical** |
| P4 | OR-merge resurrects deleted progress; unticks don't stick across devices | `mergeQuestionProgress` | High |
| P5 | Dual collections written with "either succeeds = success"; silent divergence | `saveProgressToCloud` | High |
| P6 | Whole-blob write per tick (2× full progress + all notes) — race-prone and expensive | `saveProgressToCloud` | High |
| P7 | Cloud fetched once per session; open tabs go stale indefinitely | `fetchedForUid` guard | Medium |
| P8 | Format migrations executed in the browser on every login, also duplicated in admin code | `ProgressContext`, `AdminDashboard` | Medium |
| P9 | Hardcoded admin UIDs duplicated in two files | `Header.jsx`, `AdminDashboard.jsx` | Medium |
| P10 | Web3Forms access key (placeholder) + notification logic in client bundle | `AuthContext.jsx:100` | Medium |
| P11 | No `.env`; config hardcoded; no rules/config under version control | repo | Medium |
| P12 | `.gitignore` referenced `firebase-service-account.json` at root — implies a service-account key once lived in the project folder; **rotate that key** | `.gitignore` | Medium |
| P13 | ipapi.co called client-side, PII (city-level location) stored per user without consent flow | `AuthContext` | Low |
| P14 | Blind75 fallback IDs derived from title substring (fragile if titles change) | `dataParser.js:157` | Low |

## 6. Recommended Fixes (all implemented in this delivery)

P1 → identity enforced in Postgres: `profiles.email UNIQUE`, PK = Supabase auth UUID, users created only by a DB trigger; duplicates merged at migration by e-mail. P2 → localStorage demoted to cache + offline outbox; server always replaces cache; legacy keys purged. P3 → RLS on every table + `SECURITY DEFINER` admin RPC gated by `is_admin()` in the database. P4 → per-question rows with server-side last-write-wins on `client_updated_at`. P5/P6 → one row per question; a tick writes one row through one RPC. P7 → refetch-on-focus (throttled) + optional Realtime. P8 → all legacy formats normalized **once**, during migration; the app never sees them again. P9 → `profiles.is_admin` + `admin_emails` allow-list. P10 → removed from client (replace with a Supabase DB webhook/Edge Function if wanted). P11 → `.env.example` for app and scripts; SQL under `supabase/migrations/`. P12 → rotate the Firebase service-account key after migration. P13 → kept (product feature) but server-guarded, length-capped, fill-once; easy to drop. P14 → slugs frozen in the `questions` catalog at seed time.

---

## 7. New Supabase Schema

Files: `supabase/migrations/0001_init_schema.sql` (tables), `0002_functions_triggers.sql` (logic), `0003_rls_policies.sql` (security). Run them in that order in the SQL editor.

Entities: `profiles` (1:1 with `auth.users`, UNIQUE citext e-mail, trigger-maintained `total_solved`, `firebase_uids[]` provenance), `admin_emails`, `sheets`, `questions` (surrogate PK + natural key `UNIQUE(sheet_id, slug)` matching the JSON ids the app already uses), `user_progress` (PK `(user_id, sheet_id, question_slug)` — solved/revision/note per row, `first_solved_at`, `solved_at`, `client_updated_at` for LWW), `user_sheet_stats` (trigger-maintained per-sheet counters so admin/leaderboards never scan progress), `daily_activity` (first-time solves per day → streaks/heatmaps), `progress_events` (append-only history: attempts, revision history, future analytics), `achievements` + `user_achievements` (seeded thresholds, auto-awarded by trigger), `user_settings` (theme, sheet order, JSONB escape hatch for future preferences), `migration_audit` (who was migrated from which Firebase UIDs, with counts).

Cascade rules are deliberate: deleting an auth user cascades through profile → progress → stats → events (clean GDPR delete); questions are `ON DELETE RESTRICT` (catalog rows are deactivated, never deleted, so user history can't be orphaned).

Why this scales to millions: every hot query is a PK or partial-index lookup scoped to one `user_id`; counters are O(1) trigger increments instead of aggregate scans; the admin view reads pre-aggregated `user_sheet_stats`; append-only history is insert-only; nothing ever rewrites more than one row per user action.

## 8. SQL Migration Scripts

The three files above are complete and idempotent (`create … if not exists`, `create or replace`, `drop policy if exists` + recreate, seed `on conflict do nothing`). They contain every PK, FK, index, unique constraint, check constraint, trigger, and RPC described in this report.

## 9. Data Migration Scripts

`scripts/` (Node, own `package.json`): `01-audit-firebase.mjs`, `02-seed-questions.mjs`, `03-migrate-to-supabase.mjs` (`--dry-run` supported), `04-validate-migration.mjs`, with shared logic in `lib/normalize.mjs` — a faithful port of the app's legacy-format semantics (flat booleans, flat `revision` map, nested, mixed, scattered-A2Z, stray keys) **plus** preservation of unknown sheet keys the old app silently dropped. Usage in `scripts/README.md`.

### The 7-phase plan

**Phase 1 — Audit (read-only).** `npm run audit` snapshots `users`, `userProgress`, and the Auth user list to `scripts/snapshots/` (timestamped — this is also your extra backup), then reports: duplicate-e-mail docs, docs missing e-mails, orphaned-UID docs, legacy-format docs, scattered-A2Z docs, and how far the two collections have diverged.

**Phase 2 — Mapping.** Old → new: Firebase UID docs → grouped by lowercased e-mail → one `auth.users` + `profiles` row per e-mail (all source UIDs recorded in `profiles.firebase_uids` and `migration_audit`); every `{sheet, question}` entry → one `user_progress` row; `updatedAt` ms → `client_updated_at` + `solved_at`/`first_solved_at` (falling back to the doc's `lastSolvedAt`/`createdAt` for legacy rows with no timestamp); doc `createdAt`/`lastSeenAt`/`lastSolvedAt` → profile columns; solved-with-timestamp rows also seed `daily_activity`, preserving history where it exists. Catalog seeded by `npm run seed` from the same JSONs the app renders.

**Phase 3 — Execution.** `npm run migrate:dry` prints the full plan (including exactly which e-mails get merged and their post-merge counts — your `kamalsnitkkr@gmail.com` 245+17 pair will appear here). `npm run migrate` then: upserts `admin_emails`; ensures one Supabase auth user per e-mail (`createUser` with `email_confirm: true`, so the first Google OAuth sign-in auto-links by verified e-mail); pushes progress in batches through the `migrate_upsert_progress` RPC — which registers unknown legacy slugs as inactive catalog rows (nothing dropped), preserves historical timestamps, and applies the same LWW guard, making re-runs safe **even after cutover** (a re-run can never overwrite data users have since written in Supabase); finally restores authoritative profile timestamps and writes the audit trail.

**Duplicate-Gmail merging (your explicit requirement):** all docs for one e-mail (across both collections and all orphaned UIDs) are merged deterministically — per question, the higher `updatedAt` wins; on legacy ties, solved/revision flags are kept (never lost) and the most recently active document's note wins. Merge order is sorted by document recency, so re-runs produce identical output.

**Phase 4+5 — Validation & integrity.** `npm run validate` recomputes the expected state from the snapshot with the same merge code and checks: every user exists; zero duplicate e-mails; per-user solved/revision/note counts; trigger counters consistent with rows; a 15-user random row-by-row deep comparison; orphan checks; auth↔profile 1:1; `user_sheet_stats` sums. Non-zero exit and a written report on any failure.

**Phase 6 — Cutover.** Deploy the rewritten frontend only after validation passes (checklist in §19).

**Phase 7 — Rollback.** §17.

**Idempotency:** every step is upsert-based on natural keys with the LWW guard; running anything twice cannot duplicate users, rows, or counts (validation proves it — counters are recomputed from rows, not incremented by the migration).

## 10. Updated Authentication Flow

**Decision: move fully to Supabase Auth (Google OAuth).** Keeping Firebase Auth alongside a Supabase database is possible (Supabase supports third-party JWTs), but it would keep the Firebase dependency you asked to eliminate, keep the historical multi-UID identity mess as the join key, and add a second vendor to every request path. Migrating auth entirely gives one identity system, one UUID per verified Google e-mail, and RLS keyed directly on `auth.uid()`.

Flow: `signInWithOAuth({provider:'google'})` → Google → Supabase creates/loads the auth user (migrated users are matched by verified e-mail and their Google identity auto-links to the pre-created account) → `handle_new_user` trigger guarantees the profile row → app loads profile + progress. Session tokens auto-refresh; sessions persist per browser as a cache only — identity always resolves server-side to the same UUID on every device. Duplicate users are impossible by construction: clients have no insert path to `profiles` (trigger-only) and `email` is UNIQUE.

**User-facing impact (one-time, unavoidable):** existing users are signed out by the cutover and sign in with Google again. Same e-mail → same migrated account, all progress present. No other impact.

**Setup required (once, ~10 min):** Supabase Dashboard → Authentication → Providers → Google → enable, with a Google OAuth client ID/secret (Google Cloud Console → Credentials; add your domain and `https://<project-ref>.supabase.co/auth/v1/callback` as authorized redirect). Add your production domain under Authentication → URL Configuration.

## 11. Updated API/Service Layer

`src/lib/supabaseClient.js` (env-driven client), `src/services/progressService.js` (reads via `get_my_progress()` — one round trip; writes via `upsert_progress()` — RLS-enforced, LWW, returns the authoritative row), `src/services/adminService.js` (`admin_list_users()` + `sheets`). Server-side RPCs replace all client-side data assembly; there is no code path that writes progress except `upsert_progress` (client) and `migrate_upsert_progress` (service role only, EXECUTE revoked from client roles).

## 12. Updated Frontend Data Flow

Login → fetch profile + all progress rows (both single queries) → render. Tick/star/note → optimistic state update → outbox entry → RPC push (immediate; retried every 30 s / on `online` / on focus if offline) → reconcile with the returned authoritative row. Tab refocus → throttled refetch (cross-device convergence); `VITE_ENABLE_REALTIME=true` upgrades this to instant push updates (RLS-scoped). Logout is blocked until the outbox is empty (same UX as before). localStorage keys: `mdsa:v2:cache:<uid>` (paint-before-fetch cache, always overwritten by server truth) and `mdsa:v2:outbox:<uid>` (pending writes). Legacy `dsaTracker*` keys are deleted at startup. Components (`QuestionList`, `Dashboard`, `SheetView`, `Header`) kept their exact context contracts — UI code is untouched except the admin data source and the removed hardcoded admin UIDs.

## 13. RLS Policies

Complete set in `0003_rls_policies.sql`: RLS enabled on all 12 tables; own-row `select/insert/update/delete` on `user_progress`; own-row `select/update` on `profiles` (insert/delete trigger-only, protected columns frozen by `protect_profile_columns` so a client can never set `is_admin` or forge counters); own-row read-only on `user_sheet_stats`, `daily_activity`, `progress_events`, `user_achievements` (written exclusively by `SECURITY DEFINER` triggers); own-row CRUD on `user_settings`; public read on `sheets`/`questions`/`achievements`; **no policies at all** on `admin_emails`/`migration_audit` (service-role only). Policies use `(select auth.uid())` for plan caching. Admin access never goes through table policies — only through the gated RPC.

## 14. Index Recommendations (all created)

PKs cover the hot paths (`user_progress` PK leads with `user_id`; `daily_activity` PK `(user_id, date)`). Additional: partial indexes `idx_up_solved / idx_up_revision / idx_up_noted` on `user_progress(user_id) WHERE …` (solved list, revision list, notes list at near-zero write cost), `idx_up_question (sheet_id, question_slug)` (per-question analytics/FK checks), `idx_questions_sheet_position` (catalog rendering), `idx_profiles_last_seen` + `idx_profiles_total_solved` (admin online/leaderboard sorts), `idx_events_user_time` (history timelines). At million-user scale the next step is partitioning `progress_events` by month — nothing else changes.

## 15. Performance Improvements

Writes: from ~2 full-blob document writes (~100 s of KB) per tick to **one ~200-byte row upsert**. Reads: from 2 document reads + client merge + potential write-back to **one RPC** returning only the user's rows (~1,418 max). N+1: none — admin page is 1 RPC + 1 catalog query (previously 1 + N re-normalizations client-side); per-sheet counters come from `user_sheet_stats` maintained in O(1) by trigger. Overfetching: eliminated (column-selected queries, aggregated admin JSON). Caching: instant paint from local cache, then server truth; catalog JSONs stay static/CDN-cached. Optimistic updates: kept, now with server reconciliation. Realtime: optional flag, RLS-scoped channel per user. Batch ops: migration pushes 500-row batches. Connection pooling: supabase-js uses Supabase's built-in PgBouncer endpoints; nothing to manage. Query plans: all app queries are PK/partial-index lookups — no sequential scans at any scale.

## 16. Security Improvements

Authorization moved from client to database (RLS everywhere; definer functions with explicit gates; `search_path` pinned). Admin: DB flag + allow-list, unset-table by clients (frozen columns), gated RPC — the old "any authenticated user can download all users" hole is closed. API exposure: only the anon key ships to browsers (public by design; the Firebase web config was equally public — that part was never the problem, the rules were). Service-role key: server-side scripts only, gitignored env. Client secrets: Web3Forms key/notification removed from the bundle. Ownership checks: every write path resolves the user from `auth.uid()` server-side — client-supplied user ids are ignored everywhere. Function privileges: migration/trigger functions have EXECUTE revoked from `anon`/`authenticated`. **Action items for you:** rotate the Firebase service-account key after migration (P12), and keep the old Firestore rules read-locked (`allow read, write: if false;` once cutover is verified — this does not delete any data).

## 17. Rollback Strategy

Firebase is untouched at every phase, so rollback is always available and instant: redeploy the previous frontend build (Firebase Auth + Firestore still work exactly as before cutover; users lose nothing). Supabase-side re-runs are safe (idempotent + LWW). If a rollback happens after users wrote new data into Supabase, re-running `migrate` later will not resurrect stale Firebase state over it — but writes made *in Firebase* during the rollback window would need the audit+migrate cycle re-run (snapshot → migrate), which the toolkit supports as-is. Keep: the timestamped snapshots (offline backup), `migration_audit` rows (per-user provenance), and the old build artifact.

## 18. Testing Strategy

Pre-cutover: `migrate:dry` plan review (verify the duplicate-merge list matches the audit); `validate` must pass 100%. Staging pass: run the whole pipeline against a free second Supabase project first — it is fully idempotent, so the production run is then routine. Manual test matrix (15 min): sign in on Chrome + a private-mode window with the same Google account → tick/untick/note/star on A → refocus B → identical state; airplane-mode a device, make changes, reconnect → outbox flushes, other device converges; sign in as your migrated admin account → admin dashboard shows one row per e-mail (the 245/17 pair now one user); non-admin account → admin RPC refuses server-side (verify with DevTools, not just hidden buttons); attempt `update profiles set is_admin = true` via the JS console with the anon key → blocked. Regression: `npm run lint && npm run build`. SQL: the three migration files are written to be idempotent and re-runnable; apply them to a scratch/staging Supabase project first (step one of the staging pass above) — that run is the authoritative syntax/behavior check before touching production.

## 19. Deployment Checklist

1. Create Supabase project → run `0001`, `0002`, `0003` in the SQL editor (in order).
2. Configure Google provider + redirect URLs (§10).
3. `cd scripts && npm install && cp .env.example .env` → fill Firebase service account, Supabase URL + service-role key, `ADMIN_EMAILS`.
4. `npm run audit` → review `snapshots/audit-report-latest.json`.
5. `npm run seed` → 1,418 questions confirmed.
6. `npm run migrate:dry` → review plan, especially merged duplicates.
7. `npm run migrate` → zero failures expected.
8. `npm run validate` → **ALL CHECKS PASSED required.**
9. Frontend: `cp .env.example .env.local` → fill `VITE_SUPABASE_URL` + `VITE_SUPABASE_ANON_KEY`; `npm install && npm run build`; deploy.
10. Post-verify (§20), then read-lock Firestore rules and rotate the Firebase service key. Do **not** delete the Firebase project — it is the rollback and the historical backup.

## 20. Verification Checklist (post-cutover)

Same account on two browsers shows identical progress, live after refocus. Un-ticking sticks everywhere (no zombie resurrection). Admin dashboard: exactly one row per e-mail; totals match `validate` output. New Google sign-in creates exactly one profile (check `profiles` count + `handle_new_user`). Duplicate-merge spot check: `select email, total_solved, firebase_uids from profiles where cardinality(firebase_uids) > 1;` — merged users show all source UIDs and the merged count. `migration_audit` has one row per migrated e-mail. Non-admin cannot call `admin_list_users` (server error) nor read another user's rows. Streak/daily activity populate for historical solves that had timestamps and for all new solves.

---

### Success criteria → status

Every existing user keeps all historical data (validated row-by-row; unknown legacy slugs preserved as inactive catalog entries) ✅ · No production data lost, Firebase untouched ✅ · One Google account ⇒ exactly one user, enforced by `UNIQUE(email)` + trigger-only user creation ✅ · Identical progress on every browser/device: server-authoritative reads, per-row LWW writes, focus refetch, optional realtime ✅ · Supabase is the single source of truth; localStorage demoted to cache/outbox; zero Firebase references remain in `src/` ✅ · Schema normalized, indexed, RLS-secured, trigger-consistent, and scale-ready without redesign ✅
