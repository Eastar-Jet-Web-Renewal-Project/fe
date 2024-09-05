import fareClassPolicy from "@mocks/flight/fareClass.json";

import FlightDetailLayout from "../layouts/FlightDetailLayout";
import {
  BookingClassPolicyResponse,
  FlightCreatePageRequest,
} from "@commons/services/api/interfaces/flight/flight";
import { useFlightInfoForm } from "@commons/hooks/useFlight/useFlightInfoForm";
import { useEffect, useState } from "react";
import {
  adaptBookingClassPolicyResponseToFlightPrice,
  adaptFlightInfoToFlightDetailPageResponse,
  adaptFlightPricesToFlightDetailPageResponse,
} from "@commons/utilities/adapters/flightInfoAdapters";
import { useFlightPriceForm } from "@commons/hooks/useFlight/useFlightPriceForm";

export default function FlightCreatePage() {
  const [flightData, setFlightData] = useState<FlightCreatePageRequest>({});

  //TODO: API 호출로 변경
  const currentPricePolicy = fareClassPolicy as BookingClassPolicyResponse;

  const { flightInfo, updateFlightInfo, validateFlightInfo } =
    useFlightInfoForm();

  const { flightPrice, updateFlightPrice, validateFlightPrice } =
    useFlightPriceForm(
      adaptBookingClassPolicyResponseToFlightPrice(currentPricePolicy),
    );

  const handleSubmit = () => {
    //TODO: 저장 한번 더 물어야함.
    validateFlightInfo();
    validateFlightPrice();
    //TODO: react-query mutate 사용해야함
    console.log(flightData);
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
