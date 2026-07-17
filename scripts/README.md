# Firebase → Supabase migration toolkit

Firebase is **only ever read**. Nothing in these scripts writes to or deletes
from Firebase — the snapshot taken in step 1 also acts as an extra offline
backup of all production data.

## One-time setup

```bash
cd scripts
npm install
cp .env.example .env        # fill in the values (see comments inside)
```

You need: a Firebase service-account JSON (Project settings → Service
accounts), and your Supabase project URL + `service_role` key (Project
Settings → API). Apply the SQL first: run the three files in
`../supabase/migrations/` in order, in the Supabase SQL Editor (0001 → 0002 → 0003).

## Run order

```bash
npm run audit         # Phase 1  read-only snapshot + problem report
npm run seed          # Phase 2  seed sheets/questions catalog from public/data
npm run migrate:dry   # Phase 3a review the plan (merges, counts) — writes nothing
npm run migrate       # Phase 3b execute (idempotent, safe to re-run)
npm run validate      # Phase 4+5 row-level validation + integrity checks
```

Cut production over (Phase 6) **only** when `validate` prints ALL CHECKS
PASSED. Rollback (Phase 7): redeploy the previous frontend build — Firebase
still holds all data, untouched. Full details in `../REPORT.md`.
