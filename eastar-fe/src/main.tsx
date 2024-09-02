import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyles from "./styles/global.styles.ts";
import Route from "@commons/routes/Route.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyles />
    <Route />
  </StrictMode>,
);
