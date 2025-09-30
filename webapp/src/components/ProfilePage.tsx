import { Heading } from "@/components/Heading"
import { Section } from "@/components/Section"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEffect, useReducer } from "react"
import type { UserProfileState, UserProfileAction } from "@/types/user.types"
import { api } from "@/api"
import { logger } from "@/utils/logger"

const profileReducer = (state: UserProfileState, action: UserProfileAction) => {
  switch (action.type) {
    case "load":
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case "success":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      }
    case "fail":
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    default:
      throw new Error("invalid action type")
  }
}

export const ProfilePage = () => {
  const [profile, dispatchProfile] = useReducer(
    profileReducer,
    { data: { email: "" }, isLoading: false, isError: false }
  )

  useEffect(() => {
    async function fetchProfile() {
      const profile = await api.getUserProfile()
      dispatchProfile({
        type: "success",
        payload: profile
      })
    }
    dispatchProfile({ type: "load" })
    try {
      fetchProfile()
    } catch (error) {
      logger.error(error)
      dispatchProfile({ type: "fail" })
    }
  }, [])

  return (
    <Section>
      <Heading>Profile</Heading>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Your profile settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label>Email:</Label>
              <Input className="max-w-sm" type="text" value={profile.data?.email} disabled />
            </div>
          </div>
        </CardContent>
      </Card>
    </Section>
  )
}
