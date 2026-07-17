-- ═══════════════════════════════════════════════════════════════════════════
-- Master DSA — Supabase schema (0001)
-- Normalized, RLS-ready, designed for millions of users.
--
-- Identity model:
--   auth.users (Supabase Auth, Google OAuth) 1──1 public.profiles
--   The permanent user identifier is auth.users.id (UUID).
--   One verified Google e-mail  ⇒  exactly one auth user  ⇒  exactly one profile.
--
-- Progress model:
--   One row per (user, sheet, question) in user_progress — no nested blobs,
--   no whole-document rewrites, no cross-question races.
-- ═══════════════════════════════════════════════════════════════════════════

create extension if not exists citext;

-- ─────────────────────────────────────────────
-- 1. profiles — one row per authenticated user
-- ─────────────────────────────────────────────
create table if not exists public.profiles (
  id                      uuid primary key references auth.users (id) on delete cascade,
  email                   citext not null unique,
  display_name            text   not null default '',
  photo_url               text   not null default '',
  location                text   not null default 'Unknown',
  is_admin                boolean not null default false,
  -- denormalized counter maintained by trigger; never written by clients
  total_solved            integer not null default 0 check (total_solved >= 0),
  migrated_from_firebase  boolean not null default false,
  firebase_uids           text[]  not null default '{}',
  created_at              timestamptz not null default now(),
  updated_at              timestamptz not null default now(),
  last_seen_at            timestamptz,
  last_solved_at          timestamptz
);

comment on table public.profiles is
  'App user. PK = auth.users.id. email is UNIQUE: one Google account = one user, enforced by the database.';

-- ─────────────────────────────────────────────
-- 2. admin_emails — allow-list that grants is_admin at signup/migration
-- ─────────────────────────────────────────────
create table if not exists public.admin_emails (
  email      citext primary key,
  note       text not null default '',
  created_at timestamptz not null default now()
);

-- ─────────────────────────────────────────────
-- 3. sheets — the 6 DSA sheets (catalog)
-- ─────────────────────────────────────────────
create table if not exists public.sheets (
  id              text primary key check (id ~ '^[A-Za-z0-9_]+$'),
  name            text not null,
  description     text not null default '',
  position        integer not null default 0,
  total_questions integer not null default 0,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

-- ─────────────────────────────────────────────
-- 4. questions — catalog of every question in every sheet
--    Natural key (sheet_id, slug) matches the ids already used by the
--    frontend JSON files ('3sum', 'neetcode150_containsduplica_1', …).
-- ─────────────────────────────────────────────
create table if not exists public.questions (
  id          bigint generated always as identity primary key,
  sheet_id    text not null references public.sheets (id) on delete restrict,
  slug        text not null,
  title       text not null default '',
  url         text not null default '',
  links       jsonb not null default '{}'::jsonb,
  difficulty  smallint not null default 1 check (difficulty between 0 and 2),
  category    text not null default '',
  subcategory text not null default '',
  position    integer not null default 0,
  -- questions are never deleted (user progress references them);
  -- retired/unknown-legacy questions are deactivated instead.
  is_active   boolean not null default true,
  source      text not null default 'seed' check (source in ('seed', 'legacy_migration', 'manual')),
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  unique (sheet_id, slug)
);

create index if not exists idx_questions_sheet_position on public.questions (sheet_id, position);

-- ─────────────────────────────────────────────
-- 5. user_progress — THE core table. One row per user × question.
--    Covers: Solved Status, Revision List (bookmark/star), Notes.
-- ─────────────────────────────────────────────
create table if not exists public.user_progress (
  user_id           uuid not null references public.profiles (id) on delete cascade,
  sheet_id          text not null,
  question_slug     text not null,
  is_solved         boolean not null default false,
  is_revision       boolean not null default false,   -- star / bookmark / revision list
  note              text not null default '' check (char_length(note) <= 20000),
  first_solved_at   timestamptz,
  solved_at         timestamptz,                      -- most recent solve
  -- client wall-clock in ms; used for deterministic last-write-wins when
  -- offline queues flush late. Server updated_at remains the audit truth.
  client_updated_at bigint not null default 0,
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now(),
  primary key (user_id, sheet_id, question_slug),
  foreign key (sheet_id, question_slug)
    references public.questions (sheet_id, slug)
    on update cascade on delete restrict
);

-- PK already serves (user_id, …) lookups. Partial indexes for hot filters:
create index if not exists idx_up_solved    on public.user_progress (user_id) where is_solved;
create index if not exists idx_up_revision  on public.user_progress (user_id) where is_revision;
create index if not exists idx_up_noted     on public.user_progress (user_id) where note <> '';
-- reverse lookups / per-question aggregates:
create index if not exists idx_up_question  on public.user_progress (sheet_id, question_slug);

-- ─────────────────────────────────────────────
-- 6. user_sheet_stats — denormalized per-sheet counters (trigger-maintained).
--    Lets the admin dashboard / leaderboards avoid scanning user_progress.
-- ─────────────────────────────────────────────
create table if not exists public.user_sheet_stats (
  user_id        uuid not null references public.profiles (id) on delete cascade,
  sheet_id       text not null references public.sheets (id) on delete cascade,
  solved_count   integer not null default 0 check (solved_count >= 0),
  revision_count integer not null default 0 check (revision_count >= 0),
  notes_count    integer not null default 0 check (notes_count >= 0),
  updated_at     timestamptz not null default now(),
  primary key (user_id, sheet_id)
);

-- ─────────────────────────────────────────────
-- 7. daily_activity — one row per user per active day (streaks, heatmaps).
--    solved_count = first-time solves that day. Maintained by trigger.
-- ─────────────────────────────────────────────
create table if not exists public.daily_activity (
  user_id       uuid not null references public.profiles (id) on delete cascade,
  activity_date date not null,
  solved_count  integer not null default 0 check (solved_count >= 0),
  updated_at    timestamptz not null default now(),
  primary key (user_id, activity_date)
);

-- ─────────────────────────────────────────────
-- 8. progress_events — append-only history (Attempts / Revision History /
--    future analytics). Cheap inserts, never updated.
-- ─────────────────────────────────────────────
create table if not exists public.progress_events (
  id            bigint generated always as identity primary key,
  user_id       uuid not null references public.profiles (id) on delete cascade,
  sheet_id      text not null,
  question_slug text not null,
  event_type    text not null check (event_type in
                  ('solved', 'unsolved', 'revision_on', 'revision_off', 'note_updated')),
  created_at    timestamptz not null default now()
);

create index if not exists idx_events_user_time on public.progress_events (user_id, created_at desc);

-- ─────────────────────────────────────────────
-- 9. achievements + user_achievements
-- ─────────────────────────────────────────────
create table if not exists public.achievements (
  id          text primary key,
  name        text not null,
  description text not null default '',
  icon        text not null default '🏆',
  kind        text not null default 'total_solved' check (kind in ('total_solved')),
  threshold   integer not null default 0,
  created_at  timestamptz not null default now()
);

create table if not exists public.user_achievements (
  user_id        uuid not null references public.profiles (id) on delete cascade,
  achievement_id text not null references public.achievements (id) on delete cascade,
  earned_at      timestamptz not null default now(),
  primary key (user_id, achievement_id)
);

insert into public.achievements (id, name, description, icon, kind, threshold) values
  ('first_blood',    'First Blood',    'Solve your first problem',    '🩸', 'total_solved', 1),
  ('getting_warm',   'Getting Warm',   'Solve 10 problems',           '🔥', 'total_solved', 10),
  ('half_century',   'Half Century',   'Solve 50 problems',           '🏏', 'total_solved', 50),
  ('centurion',      'Centurion',      'Solve 100 problems',          '💯', 'total_solved', 100),
  ('geared_up',      'Geared Up',      'Solve 250 problems',          '⚙️', 'total_solved', 250),
  ('machine',        'Machine',        'Solve 500 problems',          '🤖', 'total_solved', 500),
  ('grandmaster',    'Grandmaster',    'Solve 1000 problems',         '👑', 'total_solved', 1000)
on conflict (id) do nothing;

-- ─────────────────────────────────────────────
-- 10. user_settings — per-user preferences (theme, sheet order, future).
-- ─────────────────────────────────────────────
create table if not exists public.user_settings (
  user_id     uuid primary key references public.profiles (id) on delete cascade,
  theme       text not null default 'dark' check (theme in ('dark', 'light')),
  sheet_order text[] not null default '{}',
  preferences jsonb not null default '{}'::jsonb,
  updated_at  timestamptz not null default now()
);

-- ─────────────────────────────────────────────
-- 11. migration_audit — traceability for the Firebase → Supabase migration.
--     Written only by the migration script (service role).
-- ─────────────────────────────────────────────
create table if not exists public.migration_audit (
  id                bigint generated always as identity primary key,
  run_id            text not null,
  email             citext not null,
  supabase_user_id  uuid,
  firebase_uids     text[] not null default '{}',
  merged_duplicates boolean not null default false,
  source_docs       jsonb not null default '[]'::jsonb,
  solved_count      integer not null default 0,
  revision_count    integer not null default 0,
  notes_count       integer not null default 0,
  migrated_at       timestamptz not null default now(),
  unique (run_id, email)
);

-- Useful admin-side indexes
create index if not exists idx_profiles_last_seen    on public.profiles (last_seen_at desc nulls last);
create index if not exists idx_profiles_total_solved on public.profiles (total_solved desc);
