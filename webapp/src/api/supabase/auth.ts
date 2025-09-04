import type { Api } from "@/types/api.types"
import { supabase } from "@/utils/supabase"
import { logger } from "@/utils/logger"

export const authApi: Pick<Api, "login" | "logout"> = {
  async login(email: string, password: string) {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      logger.error(error)
    }
  },
  async logout() {
    await supabase.auth.signOut()
  }
}
