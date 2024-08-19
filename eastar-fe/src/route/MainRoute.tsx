import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DesignSystem from "../domains/design/pages/DesignSystem";

const router = createBrowserRouter([
  { path: "/design-system", element: <DesignSystem /> },
]);

export default function MainRoute() {
  return <RouterProvider router={router} />;
}
