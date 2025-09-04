import { Outlet } from "react-router"
import { Header } from "@/components/Header"
import { Toaster } from "sonner"

export const RootLayout = () => (
  <>
    <Header />
    <Outlet />
    <Toaster position="top-center" />
  </>
)
