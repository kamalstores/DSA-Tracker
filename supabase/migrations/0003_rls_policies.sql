-- ═══════════════════════════════════════════════════════════════════════════
-- Master DSA — Row Level Security (0003)
--
-- Principles:
--   • RLS enabled on EVERY table. No table is readable without a policy.
--   • Users can only ever see / mutate their own rows.
--   • Catalog tables (sheets, questions, achievements) are read-only to all.
--   • Counter/history tables are written ONLY by security-definer triggers.
--   • Admin access goes through admin_list_users() (definer + is_admin()),
--     never through broad table policies — replacing the old Firestore setup
--     where any client could read the entire users collection.
--   • The service role bypasses RLS (used only by server-side migration).
-- ═══════════════════════════════════════════════════════════════════════════

alter table public.profiles          enable row level security;
alter table public.admin_emails      enable row level security;
alter table public.sheets            enable row level security;
alter table public.questions         enable row level security;
alter table public.user_progress     enable row level security;
alter table public.user_sheet_stats  enable row level security;
alter table public.daily_activity    enable row level security;
alter table public.progress_events   enable row level security;
alter table public.achievements      enable row level security;
alter table public.user_achievements enable row level security;
alter table public.user_settings     enable row level security;
alter table public.migration_audit   enable row level security;

-- ── profiles ──────────────────────────────────────────────────────────────
drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own" on public.profiles
  for select to authenticated
  using (id = (select auth.uid()));

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own" on public.profiles
  for update to authenticated
  using (id = (select auth.uid()))
  with check (id = (select auth.uid()));
-- (insert/delete: no policy → only triggers / service role. Protected columns
--  are frozen by trg_protect_profiles.)

-- ── catalog: sheets / questions / achievements — public read, no writes ───
drop policy if exists "sheets_read_all" on public.sheets;
create policy "sheets_read_all" on public.sheets
  for select to anon, authenticated using (true);

drop policy if exists "questions_read_all" on public.questions;
create policy "questions_read_all" on public.questions
  for select to anon, authenticated using (true);

drop policy if exists "achievements_read_all" on public.achievements;
create policy "achievements_read_all" on public.achievements
  for select to anon, authenticated using (true);

-- ── user_progress — full CRUD on own rows only ────────────────────────────
drop policy if exists "progress_select_own" on public.user_progress;
create policy "progress_select_own" on public.user_progress
  for select to authenticated
  using (user_id = (select auth.uid()));

drop policy if exists "progress_insert_own" on public.user_progress;
create policy "progress_insert_own" on public.user_progress
  for insert to authenticated
  with check (user_id = (select auth.uid()));

drop policy if exists "progress_update_own" on public.user_progress;
create policy "progress_update_own" on public.user_progress
  for update to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));

drop policy if exists "progress_delete_own" on public.user_progress;
create policy "progress_delete_own" on public.user_progress
  for delete to authenticated
  using (user_id = (select auth.uid()));

-- ── read-only mirrors of my own derived data ──────────────────────────────
drop policy if exists "sheet_stats_select_own" on public.user_sheet_stats;
create policy "sheet_stats_select_own" on public.user_sheet_stats
  for select to authenticated
  using (user_id = (select auth.uid()));

drop policy if exists "daily_activity_select_own" on public.daily_activity;
create policy "daily_activity_select_own" on public.daily_activity
  for select to authenticated
  using (user_id = (select auth.uid()));

drop policy if exists "events_select_own" on public.progress_events;
create policy "events_select_own" on public.progress_events
  for select to authenticated
  using (user_id = (select auth.uid()));

drop policy if exists "user_achievements_select_own" on public.user_achievements;
create policy "user_achievements_select_own" on public.user_achievements
  for select to authenticated
  using (user_id = (select auth.uid()));

-- ── user_settings — own row CRUD ──────────────────────────────────────────
drop policy if exists "settings_select_own" on public.user_settings;
create policy "settings_select_own" on public.user_settings
  for select to authenticated
  using (user_id = (select auth.uid()));

drop policy if exists "settings_insert_own" on public.user_settings;
create policy "settings_insert_own" on public.user_settings
  for insert to authenticated
  with check (user_id = (select auth.uid()));

drop policy if exists "settings_update_own" on public.user_settings;
create policy "settings_update_own" on public.user_settings
  for update to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));

-- ── admin_emails / migration_audit — service role only (no policies) ──────
-- RLS is enabled and no policy exists, so anon/authenticated see nothing.

-- ── Optional realtime (cross-device live sync). Safe to enable: realtime
--    respects RLS, so users only receive their own rows.
-- alter publication supabase_realtime add table public.user_progress;
