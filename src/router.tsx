import { createBrowserRouter } from "react-router-dom"
import Index from "./pages"
import Coworking from "./pages/coworking"
import ErrorPage from "./error-page"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <ErrorPage />
  },
  {
    path: "/coworking/:id",
    element: <Coworking />,
    // errorElement: <ErrorPage /> 
  },
])

export default router
