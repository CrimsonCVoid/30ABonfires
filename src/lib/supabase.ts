import { createClient } from "@supabase/supabase-js";

function getSupabaseUrl() {
  return process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
}

export function getSupabasePublicClient() {
  const url = getSupabaseUrl();
  const publicKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !publicKey) {
    return null;
  }

  return createClient(url, publicKey);
}

// Backward-compatible alias used by existing modules.
export const getSupabaseClient = getSupabasePublicClient;
