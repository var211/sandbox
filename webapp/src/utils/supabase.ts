import { conf } from "@/settings"
import { createClient, type SupabaseClient } from "@supabase/supabase-js"
import { type Database } from "@/types/database.types"


let supabase: SupabaseClient<Database> | null = null

export const getSupabase = () => {
  if (supabase === null) {
    supabase = createClient<Database>(conf.SUPABASE_URL, conf.SUPABASE_KEY)
  }
  return supabase
}

// export const supabase = createClient<Database>(conf.SUPABASE_URL, conf.SUPABASE_KEY)
