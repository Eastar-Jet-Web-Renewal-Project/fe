import CreateFlightPage from "@domains/admin/create-flight/pages/CreateFlightPage";
import FlightDetailPage from "@domains/admin/flight-detail/pages/FlightDetailPage";
import ManageFlightPage from "@domains/admin/manage-flight/pages/ManageFlightPage";
import { Route } from "react-router-dom";

export const adminRouter = (
  <Route path="/admin">
    <Route path="flight">
      <Route path="search" element={<ManageFlightPage />} />
      <Route path="create" element={<CreateFlightPage />} />
      <Route path=":id" element={<FlightDetailPage />} />
    </Route>
  </Route>
);
