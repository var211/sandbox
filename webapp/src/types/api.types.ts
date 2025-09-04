import type { User } from "@supabase/supabase-js"

export interface Api {
  getUser(): Promise<User | null>
  login(email: string, password: string): Promise<void>
  logout(): Promise<void>
}
