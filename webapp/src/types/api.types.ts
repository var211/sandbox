import type { AuthTokenResponsePassword, User } from "@supabase/supabase-js"
import type { UserProfile } from "@/types/user.types"

export interface Api {
  getUser(): Promise<User | null>
  getUserProfile(): Promise<UserProfile>
  login(email: string, password: string): Promise<AuthTokenResponsePassword>
  logout(): Promise<void>
}
