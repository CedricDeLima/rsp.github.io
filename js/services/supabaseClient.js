import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = "https://xrtmlddmoepmomvtjgok.supabase.co";
const SUPABASE_KEY = "TA_PUBLIC_KEY";

export const db = createClient(SUPABASE_URL, SUPABASE_KEY);
