import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DesignSystem from "../domains/design/pages/DesignSystem";
import DesignComponentPage from "../domains/design/pages/DesignComponentPage";
import SignInPage from "../domains/login/pages/SignInPage";

const router = createBrowserRouter([
  {
    path: "design-system",
    element: <DesignSystem />,
  },
  {
    path: "design-component",
    element: <DesignComponentPage />,
  },
  {
    path: "sign-in",
    element: <SignInPage />,
  },
]);

export default function MainRoute() {
  return <RouterProvider router={router} />;
}
