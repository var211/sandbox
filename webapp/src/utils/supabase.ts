import { conf } from "@/settings"
import { createClient } from "@supabase/supabase-js"
import { type Database } from "@/types/database.types"


export const supabase = createClient<Database>(conf.SUPABASE_URL, conf.SUPABASE_KEY)
