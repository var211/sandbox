import type { Api } from "@/types/api.types"
import { logger } from "@/utils/logger"

export const authApi: Pick<Api, "login" | "logout"> = {
  async login(email: string, password: string) {
    return new Promise(() => {
      logger.log(`login(${email}, ${password})`)
    })
    /*
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      throw error
    }
    return data
      */
  },
  async logout() {
    return new Promise(() => {
      logger.debug("logout")
    })
  }
}
