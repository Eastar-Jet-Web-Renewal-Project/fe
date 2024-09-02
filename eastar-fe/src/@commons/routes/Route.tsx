import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { mainRouter } from "./MainRoute";
import { adminRouter } from "./AdminRoute";

const router = createBrowserRouter(
  createRoutesFromElements([mainRouter, adminRouter]),
);

export default function Route() {
  return <RouterProvider router={router} />;
}
