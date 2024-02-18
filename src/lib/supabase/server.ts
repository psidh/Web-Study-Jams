import { createClient } from '@supabase/supabase-js'

const PROJECT_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const PUBLIC_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(PROJECT_URL, PUBLIC_ANON_KEY);

export default supabase;
