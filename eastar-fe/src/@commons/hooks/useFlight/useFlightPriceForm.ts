import { FlightPrice } from "@commons/types/flight/flightPrice";
import { useCallback, useState } from "react";

export const useFlightPriceForm = (initFlightPrice?: FlightPrice[]) => {
  const [flightPrice, setFlightPrice] = useState<FlightPrice[]>(
    initFlightPrice || [],
  );

  const updateFlightPrice = useCallback(
    (
      bookingClass: FlightPrice["bookingClass"],
      price: FlightPrice["price"],
    ) => {
      //이렇게 관리해야 FlightPrice 변경시 특정 field에 대한 validation이 쉬워짐
      setFlightPrice((prev) =>
        prev.map((fare) =>
          fare.bookingClass === bookingClass
            ? {
                ...fare,
                price,
              }
            : fare,
        ),
      );
    },
    [],
  );

  const validateFlightPrice = useCallback(() => {
    //TODO: validation 로직 추가
  }, []);

  return {
    flightPrice,
    updateFlightPrice,
    validateFlightPrice,
  };
};
