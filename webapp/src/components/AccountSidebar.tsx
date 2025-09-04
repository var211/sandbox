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
import { LogOutIcon } from "lucide-react"
import { Form } from "react-router"

export const AccountSidebar = () => (
  <Sidebar>
    <SidebarContent className="pt-(--spacing12)">
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
