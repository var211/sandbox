import { RouterProvider } from "react-router"
import { rootRouter } from "@/routes/root"

export const App = () => (
  <RouterProvider router={rootRouter} />
)
