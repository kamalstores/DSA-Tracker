import { createClient } from '@supabase/supabase-js';

// Public, client-safe credentials (the anon key is designed to be shipped to
// browsers — all real protection lives in Row Level Security policies).
// Values come from .env / .env.local — see .env.example.
const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!url || !anonKey) {
  throw new Error(
    'Missing VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY. ' +
    'Copy .env.example to .env.local and fill in your Supabase project values.'
  );
}

export const supabase = createClient(url, anonKey, {
  auth: {
    // Session tokens are cached in localStorage — that is only a cache of the
    // session. Identity and all data live server-side; the same Google account
    // resolves to the same auth.users.id on every browser and device.
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

export const ENABLE_REALTIME = import.meta.env.VITE_ENABLE_REALTIME === 'true';
