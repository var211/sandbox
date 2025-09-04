import { Outlet } from "react-router"
import { Header } from "@/components/Header"

export const RootLayout = () => (
  <>
    {/*<AuthProvider>*/}
    <Header />
    <Outlet />
    {/*</AuthProvider>*/}
  </>
)
