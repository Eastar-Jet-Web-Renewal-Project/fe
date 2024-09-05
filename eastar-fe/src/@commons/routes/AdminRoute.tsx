import CreateFlightPage from "@domains/admin/create-flight/pages/CreateFlightPage";
import FlightDetailPage from "@domains/admin/flight-detail/pages/FlightDetailPage";
import ManageFlightPage from "@domains/admin/manage-flight/pages/ManageFlightPage";
import { Route } from "react-router-dom";
import { ROUTES } from "../constants/routes/routes";
import FlightDetailEditPage from "@domains/admin/flight-detail/pages/FlightDetailEditPage";

export const adminRouter = (
  <>
    <Route path={ROUTES.ADMIN.FLIGHT_SEARCH} element={<ManageFlightPage />} />
    <Route path={ROUTES.ADMIN.FLIGHT_CREATE} element={<CreateFlightPage />} />
    <Route path={ROUTES.ADMIN.FLIGHT_DETAIL} element={<FlightDetailPage />} />
    <Route
      path={ROUTES.ADMIN.FLIGHT_DETAIL_EDIT}
      element={<FlightDetailEditPage />}
    />
  </>
);
