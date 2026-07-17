// ═══════════════════════════════════════════════════════════════════════════
// Progress data-access layer. Supabase is the single source of truth:
// every read comes from Postgres, every write goes through the LWW
// upsert_progress RPC (RLS-enforced). localStorage is used by the context
// as a render cache + offline outbox only — never as truth.
// ═══════════════════════════════════════════════════════════════════════════
import { supabase } from '../lib/supabaseClient';

/** DB rows → the in-memory shape the UI has always used:
 *  { [sheetId]: { [questionSlug]: { status, revision, note, updatedAt } } } */
export function rowsToProgressMap(rows) {
  const map = {};
  for (const r of rows || []) {
    if (!map[r.sheet_id]) map[r.sheet_id] = {};
    map[r.sheet_id][r.question_slug] = {
      status: Boolean(r.is_solved),
      revision: Boolean(r.is_revision),
      note: r.note || '',
      updatedAt: Number(r.client_updated_at) || 0,
    };
  }
  return map;
}

/** Load the signed-in user's entire progress in ONE round trip. */
export async function fetchMyProgress() {
  const { data, error } = await supabase.rpc('get_my_progress');
  if (error) throw new Error(error.message);
  return rowsToProgressMap(data);
}

/**
 * Persist one question's full state. Returns the AUTHORITATIVE row from the
 * server (if a newer write from another device already landed, that newer
 * state comes back and the caller reconciles the UI with it).
 */
export async function upsertQuestion({ sheetId, questionSlug, status, revision, note, clientUpdatedAt }) {
  const { data, error } = await supabase.rpc('upsert_progress', {
    p_sheet_id: sheetId,
    p_question_slug: questionSlug,
    p_is_solved: Boolean(status),
    p_is_revision: Boolean(revision),
    p_note: note || '',
    p_client_updated_at: clientUpdatedAt,
  });
  if (error) throw new Error(error.message);
  const row = Array.isArray(data) ? data[0] : data;
  return row
    ? {
        sheetId: row.sheet_id,
        questionSlug: row.question_slug,
        status: Boolean(row.is_solved),
        revision: Boolean(row.is_revision),
        note: row.note || '',
        updatedAt: Number(row.client_updated_at) || 0,
      }
    : null;
}

export async function fetchMyProfile(userId) {
  const { data, error } = await supabase
    .from('profiles')
    .select('id, email, display_name, photo_url, location, is_admin, total_solved, last_seen_at')
    .eq('id', userId)
    .maybeSingle();
  if (error) throw new Error(error.message);
  return data;
}

export async function touchLastSeen() {
  const { error } = await supabase.rpc('touch_last_seen');
  if (error) console.warn('heartbeat failed:', error.message);
}

export async function updateOwnLocation(location) {
  const { error } = await supabase.rpc('update_own_location', { p_location: location });
  if (error) console.warn('location update failed:', error.message);
}

export async function fetchMyStreak() {
  const { data, error } = await supabase.rpc('get_streak');
  if (error) throw new Error(error.message);
  return Array.isArray(data) ? data[0] : data;
}
