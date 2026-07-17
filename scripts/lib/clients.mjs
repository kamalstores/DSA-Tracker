import 'dotenv/config';
import { readFileSync } from 'node:fs';
import { createClient } from '@supabase/supabase-js';
import admin from 'firebase-admin';

export function getFirebase() {
  const path = process.env.FIREBASE_SERVICE_ACCOUNT_PATH;
  if (!path) throw new Error('FIREBASE_SERVICE_ACCOUNT_PATH is not set (see .env.example)');
  const serviceAccount = JSON.parse(readFileSync(path, 'utf8'));
  if (!admin.apps.length) {
    admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
  }
  return { db: admin.firestore(), auth: admin.auth() };
}

export function getSupabase() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error('SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY are not set (see .env.example)');
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

export const SNAPSHOT_DIR = process.env.SNAPSHOT_DIR || './snapshots';
export const DATA_DIR = process.env.DATA_DIR || '../public/data';
export const BATCH_SIZE = Math.max(50, parseInt(process.env.BATCH_SIZE || '500', 10));

/** Recursively convert Firestore Timestamps / Dates into ISO strings so
 *  snapshots are plain JSON. */
export function plainify(value) {
  if (value === null || value === undefined) return value;
  if (typeof value.toDate === 'function') return value.toDate().toISOString();
  if (value instanceof Date) return value.toISOString();
  if (Array.isArray(value)) return value.map(plainify);
  if (typeof value === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(value)) out[k] = plainify(v);
    return out;
  }
  return value;
}

export function tsMillis(iso) {
  if (!iso) return 0;
  const t = new Date(iso).getTime();
  return Number.isNaN(t) ? 0 : t;
}
