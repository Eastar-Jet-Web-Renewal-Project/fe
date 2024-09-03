import { Day } from "@commons/types/commons";
import { FLIGHT_STATUS } from "@commons/types/flight/flightInfo";
import { BookingClass } from "@commons/types/flight/flightPrice";

interface FlightBasicInfoAPI {
  id: number;
  flightCode: string;
  status: FLIGHT_STATUS;
  departureAirportCode: string;
  arrivalAirportCode: string;
  departureTime: string;
  arrivalTime: string;
  dayOfOperation: Day[];
}

interface BasePriceAPI {
  id: number;
  flightId: number;
  bookingClass: BookingClass;
  price: number;
}

export interface FlightDetailPageResponse extends FlightBasicInfoAPI {
  prices: {
    [key in BookingClass]: number;
  };
}
