import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AccountSidebar } from "@/components/AccountSidebar.tsx"
import { Outlet } from "react-router"

// export const AccountLayout = ({ children }: { children: React.ReactNode }) => (
export const AccountLayout = () => (
  <SidebarProvider>
    <AccountSidebar />
    <main>
      <SidebarTrigger className="cursor-pointer" />
      <Outlet />
    </main>
  </SidebarProvider>
)
