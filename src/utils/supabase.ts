import { createClient } from '@supabase/supabase-js';

const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env;

const anon_client = createClient(SUPABASE_URL!, SUPABASE_ANON_KEY!, {
  auth: { persistSession: false },
});

const AnonSupabaseClient = () => anon_client;

export default AnonSupabaseClient;
