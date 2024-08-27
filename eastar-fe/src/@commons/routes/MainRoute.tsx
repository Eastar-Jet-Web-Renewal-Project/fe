import { Route } from "react-router-dom";
import DesignSystem from "../../domains/design/pages/DesignSystem";
import DesignComponentPage from "../../domains/design/pages/DesignComponentPage";
import SignInPage from "../../domains/sign-in/pages/SignInPage";

export const mainRouter = (
  <Route path="/">
    <Route path="design-system" element={<DesignSystem />} />,
    <Route path="design-component" element={<DesignComponentPage />} />,
    <Route path="sign-in" element={<SignInPage />} />,
  </Route>
);
