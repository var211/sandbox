import { createSupabaseApi } from "@/api/supabase"
import { createDummyApi } from "@/api/dummy"
import type { Api } from "@/types/api.types"
import { conf } from "@/settings"

export let api: Api = createDummyApi()
if (conf.API === 'supabase') {
  api = createSupabaseApi()
}
