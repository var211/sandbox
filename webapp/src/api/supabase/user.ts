import type { Api } from "@/types/api.types"
import { getSupabase } from "@/utils/supabase"
import { logger } from "@/utils/logger"

export const userApi: Pick<Api, "getUser" | "getUserProfile"> = {
  async getUser() {
    const { data, error } = await getSupabase().auth.getUser()
    if (error) {
      logger.error(error)
      return null
    }
    return data.user
  },
  async getUserProfile() {
    const { data, error } = await getSupabase().auth.getUser()
    if (error) {
      logger.error(error)
      throw error
    }
    return {
      email: data.user?.email
    }
  }
}
