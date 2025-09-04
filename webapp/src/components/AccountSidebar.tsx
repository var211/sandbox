import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar"
import { LogOutIcon, CircleUserRoundIcon } from "lucide-react"
import { Form, Link } from "react-router"

export const AccountSidebar = () => (
  <Sidebar>
    <SidebarContent className="pt-(--spacing12)">
      <SidebarGroup>
        <SidebarGroupLabel>Account</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="cursor-pointer" asChild>
                <Link to="/account/profile">
                  <CircleUserRoundIcon />
                  <span>Profile</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>Auth</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <Form action="/account/logout" method="POST">
                <SidebarMenuButton className="cursor-pointer" asChild>
                  <button type="submit">
                    <LogOutIcon />
                    <span>Logout</span>
                  </button>
                </SidebarMenuButton>
              </Form>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
)
