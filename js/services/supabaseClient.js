import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = "https://xrtmlddmoepmomvtjgok.supabase.co";
const SUPABASE_KEY = "sb_publishable_xrDJju9cKJFoyMT1nRcDkQ_dy7doWL9";

export const db = createClient(SUPABASE_URL, SUPABASE_KEY);
