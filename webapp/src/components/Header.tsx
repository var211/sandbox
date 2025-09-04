import { Link } from "react-router"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@/components/ui/navigation-menu"

export const Header = () => (
  <header className="sticky top-0 z-50 flex items-center justify-between w-full bg-white border-b border-(--border) h-(--spacing12) px-(--spacing4) md:px-(--spacing8)">
    {/* Left */}
    <NavigationMenu aria-label="Left">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    {/* Right */}
    <NavigationMenu aria-label="Right">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/account">Account</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </header>
)
