-- ═══════════════════════════════════════════════════════════════════════════
-- Master DSA — Admin Dashboard Schema & Functions (0004)
-- ═══════════════════════════════════════════════════════════════════════════

-- ─────────────────────────────────────────────
-- 1. admin_audit_log
-- ─────────────────────────────────────────────
create table if not exists public.admin_audit_log (
  id          bigint generated always as identity primary key,
  admin_id    uuid not null references public.profiles (id) on delete restrict,
  action      text not null, -- e.g., 'grant_admin', 'import_questions', 'edit_sheet'
  target_type text not null, -- e.g., 'profile', 'sheet', 'question', 'achievement'
  target_id   text not null, -- e.g., user uid or sheet id
  details     jsonb not null default '{}'::jsonb,
  created_at  timestamptz not null default now()
);

alter table public.admin_audit_log enable row level security;

-- Only admins can read the audit log
drop policy if exists "audit_log_read_admin" on public.admin_audit_log;
create policy "audit_log_read_admin" on public.admin_audit_log
  for select to authenticated
  using (public.is_admin());

-- No direct client inserts; must use RPC
drop policy if exists "audit_log_insert_none" on public.admin_audit_log;
create policy "audit_log_insert_none" on public.admin_audit_log
  for insert to authenticated
  with check (false);

-- ─────────────────────────────────────────────
-- 2. Helper: Log Admin Action
-- ─────────────────────────────────────────────
create or replace function public.admin_log_action(
  p_action      text,
  p_target_type text,
  p_target_id   text,
  p_details     jsonb default '{}'::jsonb
)
returns void
language plpgsql
security definer set search_path = public
as $$
begin
  if not public.is_admin() then
    raise exception 'admin only';
  end if;

  insert into public.admin_audit_log (admin_id, action, target_type, target_id, details)
  values (auth.uid(), p_action, p_target_type, p_target_id, p_details);
end $$;


-- ─────────────────────────────────────────────
-- 3. Analytics RPCs
-- ─────────────────────────────────────────────

-- Activity trend (solves per day)
create or replace function public.admin_get_activity_trend(p_days int default 30)
returns table (
  activity_date date,
  total_solves  bigint
)
language sql stable
security definer set search_path = public
as $$
  select activity_date, sum(solved_count)
  from public.daily_activity
  where activity_date >= current_date - p_days
  group by activity_date
  order by activity_date;
$$;

-- User Segmentation (Power, Active, Starters, Ghosts)
create or replace function public.admin_get_user_segments()
returns jsonb
language sql stable
security definer set search_path = public
as $$
  with stats as (
    select
      count(*) filter (where total_solved >= 100) as power,
      count(*) filter (where total_solved >= 10 and total_solved < 100) as active,
      count(*) filter (where total_solved >= 1 and total_solved < 10) as starters,
      count(*) filter (where total_solved = 0) as ghosts
    from public.profiles
  )
  select to_jsonb(stats.*) from stats;
$$;


-- Achievements Stats
create or replace function public.admin_get_achievements_stats()
returns table (
  achievement_id text,
  name           text,
  description    text,
  icon           text,
  threshold      int,
  earners_count  bigint,
  close_count    bigint
)
language sql stable
security definer set search_path = public
as $$
  select
    a.id,
    a.name,
    a.description,
    a.icon,
    a.threshold,
    count(ua.user_id) as earners_count,
    (
      select count(*)
      from public.profiles p
      where p.total_solved >= (a.threshold - 10)
        and p.total_solved < a.threshold
    ) as close_count
  from public.achievements a
  left join public.user_achievements ua on a.id = ua.achievement_id
  group by a.id, a.name, a.description, a.icon, a.threshold
  order by a.threshold;
$$;


-- Content Insights (Stuck, Notes, Mismatches)
create or replace function public.admin_get_content_insights()
returns jsonb
language plpgsql stable
security definer set search_path = public
as $$
declare
  v_stuck jsonb;
  v_notes jsonb;
  v_mismatch jsonb;
begin
  if not public.is_admin() then
    raise exception 'admin only';
  end if;

  -- Stuck problems: high revision ratio (min 5 attempts)
  select coalesce(jsonb_agg(row_to_json(t)), '[]'::jsonb) into v_stuck
  from (
    select
      up.sheet_id,
      up.question_slug,
      q.title,
      count(*) as total_engaged,
      sum(case when up.is_revision then 1 else 0 end) as revision_count,
      round(sum(case when up.is_revision then 1 else 0 end)::numeric / count(*), 2) as ratio
    from public.user_progress up
    join public.questions q on up.sheet_id = q.sheet_id and up.question_slug = q.slug
    group by up.sheet_id, up.question_slug, q.title
    having count(*) >= 5
    order by ratio desc
    limit 10
  ) t;

  -- Notes hotspots
  select coalesce(jsonb_agg(row_to_json(t)), '[]'::jsonb) into v_notes
  from (
    select
      up.sheet_id,
      up.question_slug,
      q.title,
      sum(case when up.note <> '' then 1 else 0 end) as note_count
    from public.user_progress up
    join public.questions q on up.sheet_id = q.sheet_id and up.question_slug = q.slug
    group by up.sheet_id, up.question_slug, q.title
    having sum(case when up.note <> '' then 1 else 0 end) > 0
    order by note_count desc
    limit 10
  ) t;

  -- Difficulty Mismatches: Easy with low solve rate, or Hard with high solve rate
  select coalesce(jsonb_agg(row_to_json(t)), '[]'::jsonb) into v_mismatch
  from (
    select
      up.sheet_id,
      up.question_slug,
      q.title,
      q.difficulty,
      count(*) as total_engaged,
      sum(case when up.is_solved then 1 else 0 end) as solve_count,
      round(sum(case when up.is_solved then 1 else 0 end)::numeric / count(*), 2) as solve_ratio
    from public.user_progress up
    join public.questions q on up.sheet_id = q.sheet_id and up.question_slug = q.slug
    group by up.sheet_id, up.question_slug, q.title, q.difficulty
    having count(*) >= 5
       and (
         (q.difficulty = 0 and round(sum(case when up.is_solved then 1 else 0 end)::numeric / count(*), 2) < 0.4)
         or
         (q.difficulty = 2 and round(sum(case when up.is_solved then 1 else 0 end)::numeric / count(*), 2) > 0.8)
       )
    order by solve_ratio
    limit 10
  ) t;

  return jsonb_build_object(
    'stuck', v_stuck,
    'notes', v_notes,
    'mismatches', v_mismatch
  );
end $$;


-- Retention Cohorts
create or replace function public.admin_get_retention_cohorts()
returns table (
  cohort_month date,
  cohort_size  bigint,
  active_count bigint,
  retention_pct numeric
)
language sql stable
security definer set search_path = public
as $$
  with cohorts as (
    select
      date_trunc('month', created_at)::date as cohort_month,
      id,
      last_seen_at
    from public.profiles
  )
  select
    cohort_month,
    count(*) as cohort_size,
    sum(case when last_seen_at >= now() - interval '30 days' then 1 else 0 end) as active_count,
    round(sum(case when last_seen_at >= now() - interval '30 days' then 1 else 0 end)::numeric / count(*) * 100, 1) as retention_pct
  from cohorts
  group by cohort_month
  order by cohort_month desc;
$$;


-- Migration Stats
create or replace function public.admin_get_migration_stats()
returns jsonb
language plpgsql stable
security definer set search_path = public
as $$
declare
  v_migrated int;
  v_not_migrated int;
  v_recent_runs jsonb;
begin
  if not public.is_admin() then
    raise exception 'admin only';
  end if;

  select count(*) into v_migrated from public.profiles where migrated_from_firebase = true;
  select count(*) into v_not_migrated from public.profiles where migrated_from_firebase = false;

  select coalesce(jsonb_agg(row_to_json(t)), '[]'::jsonb) into v_recent_runs
  from (
    select run_id, email, merged_duplicates, migrated_at, solved_count
    from public.migration_audit
    order by migrated_at desc
    limit 50
  ) t;

  return jsonb_build_object(
    'migrated', coalesce(v_migrated, 0),
    'not_migrated', coalesce(v_not_migrated, 0),
    'recent_runs', v_recent_runs
  );
end $$;

-- Audit Log Fetch
create or replace function public.admin_get_audit_log(p_limit int default 100, p_offset int default 0)
returns table (
  id bigint,
  admin_id uuid,
  admin_name text,
  action text,
  target_type text,
  target_id text,
  details jsonb,
  created_at timestamptz
)
language sql stable
security definer set search_path = public
as $$
  select
    a.id,
    a.admin_id,
    p.display_name as admin_name,
    a.action,
    a.target_type,
    a.target_id,
    a.details,
    a.created_at
  from public.admin_audit_log a
  join public.profiles p on a.admin_id = p.id
  order by a.created_at desc
  limit p_limit offset p_offset;
$$;

-- ─────────────────────────────────────────────
-- 4. Bulk Mutations
-- ─────────────────────────────────────────────

create or replace function public.admin_bulk_upsert_questions(
  p_sheet_id text,
  p_questions jsonb
)
returns int
language plpgsql
security definer set search_path = public
as $$
declare
  q jsonb;
  v_count int := 0;
begin
  if not public.is_admin() then
    raise exception 'admin only';
  end if;

  for q in select * from jsonb_array_elements(p_questions) loop
    insert into public.questions (
      sheet_id, slug, title, url, links, difficulty, category, subcategory, position, is_active, source
    ) values (
      p_sheet_id,
      q->>'slug',
      q->>'title',
      coalesce(q->>'url', ''),
      coalesce(q->'links', '{}'::jsonb),
      coalesce((q->>'difficulty')::smallint, 1),
      coalesce(q->>'category', ''),
      coalesce(q->>'subcategory', ''),
      coalesce((q->>'position')::int, 0),
      coalesce((q->>'is_active')::boolean, true),
      'manual'
    )
    on conflict (sheet_id, slug) do update set
      title = excluded.title,
      url = excluded.url,
      links = excluded.links,
      difficulty = excluded.difficulty,
      category = excluded.category,
      subcategory = excluded.subcategory,
      position = excluded.position,
      is_active = excluded.is_active,
      updated_at = now();

    v_count := v_count + 1;
  end loop;

  perform public.admin_log_action(
    'bulk_upsert_questions',
    'sheet',
    p_sheet_id,
    jsonb_build_object('count', v_count)
  );

  return v_count;
end $$;

-- Revoke execute from public
revoke execute on function public.admin_log_action(text, text, text, jsonb) from public, anon, authenticated;
revoke execute on function public.admin_get_activity_trend(int) from public, anon, authenticated;
revoke execute on function public.admin_get_user_segments() from public, anon, authenticated;
revoke execute on function public.admin_get_achievements_stats() from public, anon, authenticated;
revoke execute on function public.admin_get_content_insights() from public, anon, authenticated;
revoke execute on function public.admin_get_retention_cohorts() from public, anon, authenticated;
revoke execute on function public.admin_get_migration_stats() from public, anon, authenticated;
revoke execute on function public.admin_get_audit_log(int, int) from public, anon, authenticated;
revoke execute on function public.admin_bulk_upsert_questions(text, jsonb) from public, anon, authenticated;

-- Grant to authenticated
grant execute on function public.admin_log_action(text, text, text, jsonb) to authenticated;
grant execute on function public.admin_get_activity_trend(int) to authenticated;
grant execute on function public.admin_get_user_segments() to authenticated;
grant execute on function public.admin_get_achievements_stats() to authenticated;
grant execute on function public.admin_get_content_insights() to authenticated;
grant execute on function public.admin_get_retention_cohorts() to authenticated;
grant execute on function public.admin_get_migration_stats() to authenticated;
grant execute on function public.admin_get_audit_log(int, int) to authenticated;
grant execute on function public.admin_bulk_upsert_questions(text, jsonb) to authenticated;
