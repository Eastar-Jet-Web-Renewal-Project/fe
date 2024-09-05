import flights from "@mocks/flight/flight.json";

import ManageFlightLayout from "../layouts/ManageFlightLayout";
import { useFlightInfoForm } from "@commons/hooks/useFlight/useFlightInfoForm";
import { FlightSearchResultTableRow } from "../types/flight";
import { useNavigate } from "react-router-dom";
import { getDynamicRoute } from "@commons/utilities/routes/routePathGenerators";
import { ROUTES } from "@commons/constants/routes/routes";

export default function ManageFlightPage() {
  const navigate = useNavigate();

  const { flightInfo, updateFlightInfo } = useFlightInfoForm();
  //TODO: API 연동

  const handleFlightClick = (flight: FlightSearchResultTableRow) => {
    navigate(getDynamicRoute(ROUTES.ADMIN.FLIGHT_DETAIL, { id: flight.id }));
  };
  return (
    <ManageFlightLayout
      flightInfo={flightInfo}
      onFlightInfoChange={updateFlightInfo}
      onSearchFlight={() => {
        //TODO: 검색 로직
        console.log("search");
      }}
      isSearching={false}
      onFlightClick={handleFlightClick}
      searchResults={flights as FlightSearchResultTableRow[]}
    />
  );
}
