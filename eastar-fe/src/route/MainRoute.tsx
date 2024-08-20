import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DesignSystem from "../domains/design/pages/DesignSystem";
import DesignComponentPage from "../domains/design/pages/DesignComponentPage";

const router = createBrowserRouter([
  {
    path: "design-system",
    element: <DesignSystem />,
  },
  {
    path: "design-component",
    element: <DesignComponentPage />,
  },
]);

export default function MainRoute() {
  return <RouterProvider router={router} />;
}
