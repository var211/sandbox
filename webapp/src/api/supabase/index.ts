import type { Api } from "@/types/api.types"
import { userApi } from "@/api/supabase/user"
import { authApi } from "@/api/supabase/auth"

export const createSupabaseApi = (): Api => {
  return {
    ...userApi,
    ...authApi
  }
}
