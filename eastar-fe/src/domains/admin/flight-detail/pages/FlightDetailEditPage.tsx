import flightDetailMock from "@mocks/flight/flightDetail.json";

import { useLocation, useNavigate, useParams } from "react-router-dom";
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

export default function FlightDetailEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  //TODO: react-query로 변경
  const [flightData, setFlightData] = useState<FlightDetailPageResponse>(
    flightDetailMock as FlightDetailPageResponse,
  );

  const { flightInfo, updateFlightInfo, validateFlightInfo } =
    useFlightInfoForm(adaptFlightDetailPageResponseToFlightInfo(flightData));

  const { flightPrice, updateFlightPrice, validateFlightPrice } =
    useFlightPriceForm(adaptFlightDetailPageResponseToFlightPrices(flightData));

  const handleSubmit = () => {
    if (!id) return;
    //TODO: 저장 한번 더 물어야함.
    validateFlightInfo();
    validateFlightPrice();
    //TODO: react-query mutate 사용해야함
    navigate(getDynamicRoute(ROUTES.ADMIN.FLIGHT_DETAIL, { id }));
  };

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
      onFlightInfoChange={updateFlightInfo}
      priceInfo={flightPrice}
      onPriceInfoChange={updateFlightPrice}
      onSubmit={handleSubmit}
      isEditMode
    />
  );
}
