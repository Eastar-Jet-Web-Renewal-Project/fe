import { FlightInfo } from "@commons/types/flight/flightInfo";
import { useCallback, useState } from "react";

export const useFlightInfoForm = (initFlightInfo: FlightInfo) => {
  const [flightInfo, setFlightInfo] = useState(initFlightInfo);

  const updateFlightInfo = useCallback(
    (field: keyof FlightInfo, value: FlightInfo[typeof field]) => {
      setFlightInfo((prev) => ({ ...prev, [field]: value }));
    },
    [],
  );

  const submitFlightInfo = useCallback(
    (apiCallFunc: (flightInfo: FlightInfo) => void) => {
      //   TODO: flightInfo Form 유효성 검사로직

      apiCallFunc(flightInfo);
    },
    [],
  );

  const validateFlightInfo = useCallback(() => {}, []);

  return {
    flightInfo,
    updateFlightInfo,
    submitFlightInfo,
    validateFlightInfo,
  };
};
