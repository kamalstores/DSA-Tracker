-- ═══════════════════════════════════════════════════════════════════════════
-- Master DSA — functions & triggers (0002)
-- ═══════════════════════════════════════════════════════════════════════════

-- Single place to change the "day boundary" used for daily activity/streaks.
create or replace function public.app_timezone()
returns text language sql immutable as $$ select 'Asia/Kolkata' $$;

-- ─────────────────────────────────────────────
-- updated_at maintenance
-- ─────────────────────────────────────────────
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at := now();
  return new;
end $$;

drop trigger if exists trg_touch_profiles      on public.profiles;
drop trigger if exists trg_touch_sheets        on public.sheets;
drop trigger if exists trg_touch_questions     on public.questions;
drop trigger if exists trg_touch_user_progress on public.user_progress;
drop trigger if exists trg_touch_user_settings on public.user_settings;

create trigger trg_touch_profiles      before update on public.profiles      for each row execute function public.set_updated_at();
create trigger trg_touch_sheets        before update on public.sheets        for each row execute function public.set_updated_at();
create trigger trg_touch_questions     before update on public.questions     for each row execute function public.set_updated_at();
create trigger trg_touch_user_progress before update on public.user_progress for each row execute function public.set_updated_at();
create trigger trg_touch_user_settings before update on public.user_settings for each row execute function public.set_updated_at();

-- ─────────────────────────────────────────────
-- New auth user → profile + settings row.
-- Fires for BOTH normal Google sign-ins and admin-API users created by the
-- migration script, so a user row can never be missing and can never be
-- duplicated (PK = auth uid, UNIQUE email).
-- ─────────────────────────────────────────────
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  -- Never block auth-user creation: users without an e-mail (e.g. anonymous
  -- sign-ins, if ever enabled) simply get no profile row.
  if new.email is null then
    return new;
  end if;

  insert into public.profiles (id, email, display_name, photo_url, is_admin)
  values (
    new.id,
    lower(new.email),
    coalesce(new.raw_user_meta_data ->> 'full_name',
             new.raw_user_meta_data ->> 'name',
             new.raw_user_meta_data ->> 'display_name',
             ''),
    coalesce(new.raw_user_meta_data ->> 'avatar_url',
             new.raw_user_meta_data ->> 'picture',
             new.raw_user_meta_data ->> 'photo_url',
             ''),
    exists (select 1 from public.admin_emails a where a.email = lower(new.email))
  )
  on conflict (id) do update
    set email        = excluded.email,
        display_name = case when public.profiles.display_name = '' then excluded.display_name else public.profiles.display_name end,
        photo_url    = case when public.profiles.photo_url    = '' then excluded.photo_url    else public.profiles.photo_url    end;

  insert into public.user_settings (user_id) values (new.id)
  on conflict (user_id) do nothing;

  return new;
end $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Keep profile identity fresh on OAuth re-login (name/avatar changes).
create or replace function public.handle_user_updated()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  update public.profiles p
     set display_name = coalesce(nullif(new.raw_user_meta_data ->> 'full_name', ''), p.display_name),
         photo_url    = coalesce(nullif(new.raw_user_meta_data ->> 'avatar_url', ''),
                                 nullif(new.raw_user_meta_data ->> 'picture', ''), p.photo_url)
   where p.id = new.id;
  return new;
end $$;

drop trigger if exists on_auth_user_updated on auth.users;
create trigger on_auth_user_updated
  after update of raw_user_meta_data on auth.users
  for each row execute function public.handle_user_updated();

-- ─────────────────────────────────────────────
-- Admin helper
-- ─────────────────────────────────────────────
create or replace function public.is_admin()
returns boolean
language sql stable
security definer set search_path = public
as $$
  select coalesce((select p.is_admin from public.profiles p where p.id = auth.uid()), false)
$$;

-- ─────────────────────────────────────────────
-- Clients may update their own profile, but never the protected columns.
-- (Blocks is_admin/total_solved/email tampering even though RLS allows
--  "update own row".)
-- ─────────────────────────────────────────────
create or replace function public.protect_profile_columns()
returns trigger language plpgsql as $$
begin
  if auth.uid() is not null then          -- any client-side write (anon key)
    new.id            := old.id;
    new.email         := old.email;
    new.is_admin      := old.is_admin;
    new.total_solved  := old.total_solved;
    new.firebase_uids := old.firebase_uids;
    new.migrated_from_firebase := old.migrated_from_firebase;
    new.created_at    := old.created_at;
  end if;
  return new;
end $$;

drop trigger if exists trg_protect_profiles on public.profiles;
create trigger trg_protect_profiles
  before update on public.profiles
  for each row execute function public.protect_profile_columns();

-- ─────────────────────────────────────────────
-- Stats / activity / events / achievements maintenance.
-- Single AFTER trigger on user_progress keeps every counter consistent —
-- clients cannot write counters directly.
-- ─────────────────────────────────────────────
create or replace function public.on_progress_change()
returns trigger
language plpgsql
security definer set search_path = public
as $$
declare
  -- OLD must never be referenced on INSERT (plpgsql: "old is not assigned yet"),
  -- so previous values are resolved via TG_OP first.
  o_solved boolean := false;
  o_rev    boolean := false;
  o_note   text    := '';
  o_first  timestamptz := null;
  d_solved   int;
  d_revision int;
  d_note     int;
  v_first_solve boolean;
  v_is_insert   boolean := (tg_op = 'INSERT');
begin
  if not v_is_insert then
    o_solved := old.is_solved;
    o_rev    := old.is_revision;
    o_note   := old.note;
    o_first  := old.first_solved_at;
  end if;

  d_solved      := (new.is_solved)::int   - (o_solved)::int;
  d_revision    := (new.is_revision)::int - (o_rev)::int;
  d_note        := (new.note <> '')::int  - (o_note <> '')::int;
  v_first_solve := new.first_solved_at is not null and o_first is null;

  if d_solved <> 0 or d_revision <> 0 or d_note <> 0 then
    insert into public.user_sheet_stats as s (user_id, sheet_id, solved_count, revision_count, notes_count)
    values (new.user_id, new.sheet_id,
            greatest(d_solved, 0), greatest(d_revision, 0), greatest(d_note, 0))
    on conflict (user_id, sheet_id) do update
      set solved_count   = greatest(s.solved_count   + d_solved,   0),
          revision_count = greatest(s.revision_count + d_revision, 0),
          notes_count    = greatest(s.notes_count    + d_note,     0),
          updated_at     = now();
  end if;

  if d_solved <> 0 then
    update public.profiles
       set total_solved   = greatest(total_solved + d_solved, 0),
           last_solved_at = case when d_solved > 0
                                 then greatest(coalesce(last_solved_at, 'epoch'::timestamptz),
                                               coalesce(new.solved_at, now()))
                                 else last_solved_at end
     where id = new.user_id;
  end if;

  -- Daily activity counts FIRST-TIME solves, dated by when the solve happened
  -- (preserves historical dates during migration).
  if v_first_solve then
    insert into public.daily_activity as da (user_id, activity_date, solved_count)
    values (new.user_id,
            (new.first_solved_at at time zone public.app_timezone())::date, 1)
    on conflict (user_id, activity_date) do update
      set solved_count = da.solved_count + 1,
          updated_at   = now();
  end if;

  -- Append-only history (skip pure no-ops)
  if new.is_solved <> o_solved then
    insert into public.progress_events (user_id, sheet_id, question_slug, event_type)
    values (new.user_id, new.sheet_id, new.question_slug,
            case when new.is_solved then 'solved' else 'unsolved' end);
  end if;
  if new.is_revision <> o_rev then
    insert into public.progress_events (user_id, sheet_id, question_slug, event_type)
    values (new.user_id, new.sheet_id, new.question_slug,
            case when new.is_revision then 'revision_on' else 'revision_off' end);
  end if;
  if new.note is distinct from o_note and new.note <> '' or (not v_is_insert and new.note = '' and o_note <> '') then
    insert into public.progress_events (user_id, sheet_id, question_slug, event_type)
    values (new.user_id, new.sheet_id, new.question_slug, 'note_updated');
  end if;

  return new;
end $$;

drop trigger if exists trg_progress_change on public.user_progress;
create trigger trg_progress_change
  after insert or update on public.user_progress
  for each row execute function public.on_progress_change();

-- Award threshold achievements whenever total_solved grows.
create or replace function public.award_achievements()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  if new.total_solved > coalesce(old.total_solved, 0) then
    insert into public.user_achievements (user_id, achievement_id)
    select new.id, a.id
      from public.achievements a
     where a.kind = 'total_solved' and a.threshold <= new.total_solved
    on conflict do nothing;
  end if;
  return new;
end $$;

drop trigger if exists trg_award_achievements on public.profiles;
create trigger trg_award_achievements
  after update of total_solved on public.profiles
  for each row execute function public.award_achievements();

-- ─────────────────────────────────────────────
-- RPC: upsert_progress — the ONLY write path the app uses for progress.
-- SECURITY INVOKER: RLS still applies. Last-write-wins on client_updated_at
-- so a stale offline queue can never clobber a newer write from another
-- device. Always returns the authoritative row so clients converge.
-- ─────────────────────────────────────────────
create or replace function public.upsert_progress(
  p_sheet_id          text,
  p_question_slug     text,
  p_is_solved         boolean,
  p_is_revision       boolean,
  p_note              text,
  p_client_updated_at bigint
)
returns public.user_progress
language plpgsql
security invoker set search_path = public
as $$
declare
  v_user uuid := auth.uid();
  v_row  public.user_progress;
begin
  if v_user is null then
    raise exception 'not authenticated';
  end if;

  insert into public.user_progress as up
        (user_id, sheet_id, question_slug, is_solved, is_revision, note,
         client_updated_at, first_solved_at, solved_at)
  values (v_user, p_sheet_id, p_question_slug,
          coalesce(p_is_solved, false), coalesce(p_is_revision, false),
          coalesce(p_note, ''), coalesce(p_client_updated_at, 0),
          case when p_is_solved then now() end,
          case when p_is_solved then now() end)
  on conflict (user_id, sheet_id, question_slug) do update
    set is_solved         = excluded.is_solved,
        is_revision       = excluded.is_revision,
        note              = excluded.note,
        client_updated_at = excluded.client_updated_at,
        first_solved_at   = coalesce(up.first_solved_at,
                                     case when excluded.is_solved then now() end),
        solved_at         = case
                              when excluded.is_solved and not up.is_solved then now()
                              when not excluded.is_solved then up.solved_at
                              else up.solved_at
                            end
    where up.client_updated_at <= excluded.client_updated_at
  returning up.* into v_row;

  if v_row.user_id is null then
    -- Stale write rejected by the LWW guard → hand back the authoritative row.
    select * into v_row
      from public.user_progress
     where user_id = v_user and sheet_id = p_sheet_id and question_slug = p_question_slug;
  end if;

  return v_row;
end $$;

-- ─────────────────────────────────────────────
-- RPC: fetch everything the app needs at login in ONE round trip.
-- ─────────────────────────────────────────────
create or replace function public.get_my_progress()
returns setof public.user_progress
language sql stable security invoker set search_path = public
as $$
  select * from public.user_progress where user_id = auth.uid()
$$;

-- Presence heartbeat (throttled client-side to 1 per 5 min).
create or replace function public.touch_last_seen()
returns void
language sql security invoker set search_path = public
as $$
  update public.profiles set last_seen_at = now() where id = auth.uid()
$$;

-- One-time best-effort location capture (only fills the blank).
create or replace function public.update_own_location(p_location text)
returns void
language sql security invoker set search_path = public
as $$
  update public.profiles
     set location = left(coalesce(p_location, 'Unknown'), 120)
   where id = auth.uid()
     and (location = '' or location = 'Unknown')
$$;

-- ─────────────────────────────────────────────
-- RPC: streaks from daily_activity (gaps-and-islands).
-- ─────────────────────────────────────────────
create or replace function public.get_streak()
returns table (current_streak int, longest_streak int)
language plpgsql stable security invoker set search_path = public
as $$
declare
  v_today date := (now() at time zone public.app_timezone())::date;
begin
  return query
  with days as (
    select activity_date
      from public.daily_activity
     where user_id = auth.uid() and solved_count > 0
  ),
  islands as (
    select activity_date,
           activity_date - (row_number() over (order by activity_date))::int as grp
      from days
  ),
  runs as (
    select min(activity_date) as start_day, max(activity_date) as end_day,
           count(*)::int as len
      from islands group by grp
  )
  select
    coalesce((select r.len from runs r where r.end_day in (v_today, v_today - 1) order by r.end_day desc limit 1), 0),
    coalesce((select max(r.len) from runs r), 0);
end $$;

-- ─────────────────────────────────────────────
-- RPC: admin_list_users — the admin dashboard's single query.
-- SECURITY DEFINER + explicit is_admin() gate (replaces the old client-side
-- "if uid in ADMIN_UIDS" check, which protected nothing).
-- ─────────────────────────────────────────────
create or replace function public.admin_list_users(
  p_search text default null,
  p_limit  int  default 1000,
  p_offset int  default 0
)
returns table (
  user_id        uuid,
  email          citext,
  display_name   text,
  photo_url      text,
  location       text,
  total_solved   integer,
  created_at     timestamptz,
  last_seen_at   timestamptz,
  last_solved_at timestamptz,
  sheet_counts   jsonb
)
language plpgsql stable
security definer set search_path = public
as $$
begin
  if not public.is_admin() then
    raise exception 'admin only';
  end if;

  return query
  select p.id, p.email, p.display_name, p.photo_url, p.location,
         p.total_solved, p.created_at, p.last_seen_at, p.last_solved_at,
         coalesce(
           (select jsonb_object_agg(s.sheet_id, jsonb_build_object(
                     'solved', s.solved_count,
                     'revision', s.revision_count,
                     'notes', s.notes_count))
              from public.user_sheet_stats s where s.user_id = p.id),
           '{}'::jsonb)
    from public.profiles p
   where p_search is null
      or p.display_name ilike '%' || p_search || '%'
      or p.email::text  ilike '%' || p_search || '%'
   order by p.total_solved desc, p.created_at asc
   limit least(greatest(p_limit, 1), 5000) offset greatest(p_offset, 0);
end $$;

-- ─────────────────────────────────────────────
-- RPC: migrate_upsert_progress — used ONLY by the migration script
-- (service role). Registers unknown legacy questions as inactive catalog
-- rows so no historical record is ever dropped, preserves historical
-- timestamps, and is idempotent + non-destructive thanks to the same
-- LWW guard (client_updated_at).
-- ─────────────────────────────────────────────
create or replace function public.migrate_upsert_progress(p_rows jsonb)
returns integer
language plpgsql
security definer set search_path = public
as $$
declare
  r          jsonb;
  v_count    int := 0;
  v_first    timestamptz;
  v_solved_at timestamptz;
begin
  for r in select * from jsonb_array_elements(p_rows) loop
    -- make sure the sheet exists (unknown legacy sheet keys land in catalog too)
    insert into public.sheets (id, name, position)
    values (r ->> 'sheet_id', r ->> 'sheet_id', 999)
    on conflict (id) do nothing;

    -- make sure the question exists; unknown legacy slugs become inactive rows
    insert into public.questions (sheet_id, slug, title, is_active, source)
    values (r ->> 'sheet_id', r ->> 'question_slug', r ->> 'question_slug', false, 'legacy_migration')
    on conflict (sheet_id, slug) do nothing;

    v_first     := nullif(r ->> 'first_solved_at', '')::timestamptz;
    v_solved_at := nullif(r ->> 'solved_at', '')::timestamptz;

    insert into public.user_progress as up
          (user_id, sheet_id, question_slug, is_solved, is_revision, note,
           client_updated_at, first_solved_at, solved_at)
    values ((r ->> 'user_id')::uuid,
            r ->> 'sheet_id',
            r ->> 'question_slug',
            coalesce((r ->> 'is_solved')::boolean, false),
            coalesce((r ->> 'is_revision')::boolean, false),
            coalesce(r ->> 'note', ''),
            coalesce((r ->> 'client_updated_at')::bigint, 0),
            case when coalesce((r ->> 'is_solved')::boolean, false)
                 then coalesce(v_first, v_solved_at, now()) end,
            case when coalesce((r ->> 'is_solved')::boolean, false)
                 then coalesce(v_solved_at, v_first, now()) end)
    on conflict (user_id, sheet_id, question_slug) do update
      set is_solved         = excluded.is_solved,
          is_revision       = excluded.is_revision,
          note              = excluded.note,
          client_updated_at = excluded.client_updated_at,
          first_solved_at   = coalesce(up.first_solved_at, excluded.first_solved_at),
          solved_at         = coalesce(excluded.solved_at, up.solved_at)
      where up.client_updated_at <= excluded.client_updated_at;

    v_count := v_count + 1;
  end loop;

  return v_count;
end $$;

-- ─────────────────────────────────────────────
-- Function privileges: default EXECUTE is granted to public — tighten it.
-- ─────────────────────────────────────────────
revoke execute on function public.migrate_upsert_progress(jsonb) from public, anon, authenticated;
revoke execute on function public.handle_new_user()  from public, anon, authenticated;
revoke execute on function public.handle_user_updated() from public, anon, authenticated;
revoke execute on function public.on_progress_change()  from public, anon, authenticated;
revoke execute on function public.award_achievements()  from public, anon, authenticated;
revoke execute on function public.protect_profile_columns() from public, anon, authenticated;

grant execute on function public.upsert_progress(text, text, boolean, boolean, text, bigint) to authenticated;
grant execute on function public.get_my_progress()            to authenticated;
grant execute on function public.touch_last_seen()            to authenticated;
grant execute on function public.update_own_location(text)    to authenticated;
grant execute on function public.get_streak()                 to authenticated;
grant execute on function public.admin_list_users(text, int, int) to authenticated;
grant execute on function public.is_admin()                   to authenticated, anon;
