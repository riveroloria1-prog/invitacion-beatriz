import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://brkkhniqczwnejcxrctn.supabase.co";

const supabaseAnonKey =
  "sb_publishable_btmlQsmr_Vt9t5rWX9U1GQ_-3Kke-A9";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);