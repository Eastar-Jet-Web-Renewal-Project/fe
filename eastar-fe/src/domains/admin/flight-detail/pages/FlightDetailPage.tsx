import flightDetailMock from "@mocks/flight/flightDetail.json";

import { useNavigate, useParams } from "react-router-dom";
import FlightDetailLayout from "../layouts/FlightDetailLayout";
import { FlightDetailPageResponse } from "@commons/services/api/interfaces/flight/flight";
import { useFlightInfoForm } from "@commons/hooks/useFlight/useFlightInfoForm";
import { useEffect, useState } from "react";
import {
  adaptFlightDetailPageResponseToFlightInfo,
  adaptFlightDetailPageResponseToFlightPrices,
  adaptFlightInfoToFlightDetailPageResponse,
  adaptFlightPricesToFlightDetailPageResponse,
} from "@commons/utilities/adapters/flightInfoAdapters";
import { useFlightPriceForm } from "@commons/hooks/useFlight/useFlightPriceForm";
import { ROUTES } from "@commons/constants/routes/routes";
import { getDynamicRoute } from "@commons/utilities/routes/routePathGenerators";

export default function FlightDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const setEditMode = () => {
    if (!id) return;

    navigate(getDynamicRoute(ROUTES.ADMIN.FLIGHT_DETAIL_EDIT, { id }));
  };
  //TODO: react-query로 변경
  const [flightData, setFlightData] = useState<FlightDetailPageResponse>(
    flightDetailMock as FlightDetailPageResponse,
  );

  const { flightInfo } = useFlightInfoForm(
    adaptFlightDetailPageResponseToFlightInfo(flightData),
  );

  const { flightPrice } = useFlightPriceForm(
    adaptFlightDetailPageResponseToFlightPrices(flightData),
  );

  useEffect(() => {
    setFlightData((prev) => ({
      ...prev,
      ...adaptFlightInfoToFlightDetailPageResponse(flightInfo),
      ...adaptFlightPricesToFlightDetailPageResponse(flightPrice),
    }));
  }, [flightInfo, flightPrice]);

  return (
    <FlightDetailLayout
      flightInfo={flightInfo}
      priceInfo={flightPrice}
      onSubmit={setEditMode}
    />
  );
}
