import { FlightInfo } from "@commons/types/flight/flightInfo";
import { useCallback, useState } from "react";

export const useFlightInfoForm = (initFlightInfo?: FlightInfo) => {
  const [flightInfo, setFlightInfo] = useState<FlightInfo>(
    initFlightInfo || {
      flightCode: "",
      departureAirport: { label: "", value: "" },
      arrivalAirport: { label: "", value: "" },
      departureTime: "",
      arrivalTime: "",
      dayOfOperation: [],
    },
  );

  const updateFlightInfo = useCallback(
    (field: keyof FlightInfo, value: FlightInfo[typeof field]) => {
      //이렇게 관리해야 flightInfo 변경시 특정 field에 대한 validation이 쉬워짐
      setFlightInfo((prev) => ({ ...prev, [field]: value }));
    },
    [],
  );

  const validateFlightInfo = useCallback(() => {
    //TODO: validation 로직 추가
  }, []);

  return {
    flightInfo,
    updateFlightInfo,
    validateFlightInfo,
  };
};
