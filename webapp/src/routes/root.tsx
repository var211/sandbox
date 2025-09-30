import { AccountLayout } from "@/components/AccountLayout"
import { AccountPage } from "@/pages/AccountPage"
import { ErrorPage } from "@/pages/ErrorPage"
import { IndexPage } from "@/pages/IndexPage"
import { LoginPage, actionLoginPage } from "@/pages/LoginPage"
import { ProfilePage } from "@/components/ProfilePage"
import { RootLayout } from "@/components/RootLayout"
import { api } from "@/api"
import { createBrowserRouter, redirect } from "react-router"
import { toast } from "sonner"
// import { logger } from "@/utils/logger"

export const rootRouter = createBrowserRouter([
  {
    id: "root",
    path: "/",
    Component: RootLayout,
    ErrorBoundary: ErrorPage,
    children: [
      {
        index: true,
        Component: IndexPage
      },
      {
        path: "login",
        action: actionLoginPage,
        Component: LoginPage
      },
      {
        path: "account",
        Component: AccountLayout,
        loader: async () => {
          const user = await api.getUser()
          if (!user) {
            throw redirect("/login")
          }
          return { user }
        },
        children: [
          {
            path: "",
            Component: AccountPage
          },
          {
            path: "profile",
            Component: ProfilePage
          },
          {
            path: "logout",
            action: async () => {
              await api.logout()
              toast("Signed out")
              return redirect("/")
            }
          }
        ]
      }
    ]
  }
])
