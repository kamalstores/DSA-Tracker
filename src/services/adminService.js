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
