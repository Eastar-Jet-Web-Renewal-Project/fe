import ManageFlightPage from "@domains/admin/manage-flight/pages/ManageFlightPage";
import { Route } from "react-router-dom";

export const adminRouter = (
  <Route path="/admin">
    <Route path="manage-flight" element={<ManageFlightPage />} />
  </Route>
);
