import type { Api } from "@/types/api.types"
import type { User } from "@supabase/supabase-js"
import type { UserProfile } from "@/types/user.types"

const DUMMY_EMAIL = "dev@localhost"

export const userApi: Pick<Api, "getUser" | "getUserProfile"> = {
  async getUser() {
    return new Promise((resolve) => {
      setTimeout(
        () => resolve({ id: "0", email: DUMMY_EMAIL } as User),
        Math.round(Math.random() * 1000)
      )
    })
  },
  async getUserProfile() {
    return new Promise((resolve) => {
      setTimeout(
        () => resolve({ email: DUMMY_EMAIL } as UserProfile),
        Math.round(Math.random() * 1000)
      )
    })
  }
}
