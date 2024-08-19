import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MainRoute from "./route/MainRoute.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainRoute />
  </StrictMode>,
);
