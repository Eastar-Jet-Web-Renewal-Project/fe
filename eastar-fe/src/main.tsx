import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MainRoute from "./@commons/routes/MainRoute.tsx";
import GlobalStyles from "./styles/global.styles.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyles />
    <MainRoute />
  </StrictMode>,
);
