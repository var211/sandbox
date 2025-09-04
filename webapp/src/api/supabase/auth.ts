import type { Api } from "@/types/api.types"
import { supabase } from "@/utils/supabase"

export const authApi: Pick<Api, "login" | "logout"> = {
  async login(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      throw error
    }
    return data
  },
  async logout() {
    await supabase.auth.signOut()
  }
}
