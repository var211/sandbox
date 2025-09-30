import type { Api } from "@/types/api.types"
import { userApi } from "@/api/dummy/user"
import { authApi } from "@/api/dummy/auth"

export const createDummyApi = (): Api => {
  return {
    ...userApi,
    ...authApi
  }
}
