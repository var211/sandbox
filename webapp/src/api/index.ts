import { createSupabaseApi } from "@/api/supabase"
import type { Api } from "@/types/api.types"

export const api: Api = createSupabaseApi()
