export interface UserProfile {
  email?: string
}

export type UserProfileState = {
  data: UserProfile | null
  isLoading: boolean
  isError: boolean
}

export type UserProfileAction = { type: "load" } | { type: "success"; payload: UserProfile } | { type: "fail" }
