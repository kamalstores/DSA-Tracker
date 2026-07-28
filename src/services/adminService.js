// Admin data-access layer. Authorization happens SERVER-SIDE inside the
// admin_list_users() RPC (SECURITY DEFINER + is_admin() gate) — unlike the
// old Firestore version, non-admins receive an error, not other users' data.
import { supabase } from '../lib/supabaseClient';

export async function fetchAdminUsers({ search = null, limit = 2000, offset = 0 } = {}) {
  const { data, error } = await supabase.rpc('admin_list_users', {
    p_search: search,
    p_limit: limit,
    p_offset: offset,
  });
  if (error) throw new Error(error.message);
  return data || [];
}

/** Sheet catalog (id, name, total_questions) — replaces hardcoded totals. */
export async function fetchSheets() {
  const { data, error } = await supabase
    .from('sheets')
    .select('id, name, position, total_questions')
    .order('position');
  if (error) throw new Error(error.message);
  return data || [];
}

// --- New Analytics RPCs ---

export async function fetchActivityTrend(days = 30) {
  const { data, error } = await supabase.rpc('admin_get_activity_trend', { p_days: days });
  if (error) throw new Error(error.message);
  return data || [];
}

export async function fetchUserSegments() {
  const { data, error } = await supabase.rpc('admin_get_user_segments');
  if (error) throw new Error(error.message);
  return data || { power: 0, active: 0, starters: 0, ghosts: 0 };
}

export async function fetchAchievementsStats() {
  const { data, error } = await supabase.rpc('admin_get_achievements_stats');
  if (error) throw new Error(error.message);
  return data || [];
}

export async function fetchContentInsights() {
  const { data, error } = await supabase.rpc('admin_get_content_insights');
  if (error) throw new Error(error.message);
  return data || { stuck: [], notes: [], mismatches: [] };
}

export async function fetchRetentionCohorts() {
  const { data, error } = await supabase.rpc('admin_get_retention_cohorts');
  if (error) throw new Error(error.message);
  return data || [];
}

export async function fetchMigrationStats() {
  const { data, error } = await supabase.rpc('admin_get_migration_stats');
  if (error) throw new Error(error.message);
  return data || { migrated: 0, not_migrated: 0, recent_runs: [] };
}

export async function fetchAuditLog(limit = 100, offset = 0) {
  const { data, error } = await supabase.rpc('admin_get_audit_log', { p_limit: limit, p_offset: offset });
  if (error) throw new Error(error.message);
  return data || [];
}

// --- Bulk Operations ---

export async function bulkUpsertQuestions(sheetId, questionsArray) {
  const { data, error } = await supabase.rpc('admin_bulk_upsert_questions', {
    p_sheet_id: sheetId,
    p_questions: questionsArray,
  });
  if (error) throw new Error(error.message);
  return data || 0;
}
