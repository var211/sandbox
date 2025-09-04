import type { Api } from "@/types/api.types"
import { supabase } from "@/utils/supabase"
import { logger } from "@/utils/logger"

export const userApi: Pick<Api, "getUser"> = {
  async getUser() {
    const { data, error } = await supabase.auth.getUser()
    if (error) {
      logger.error(error)
      return null
    }
    return data.user
  }
}
