import { Day } from "@commons/types/commons";
import { FLIGHT_STATUS } from "@commons/types/flight/flightInfo";
import {
  BookingClass,
  BookingClassCategory,
} from "@commons/types/flight/flightPrice";

export interface FlightBasicInfoAPI {
  id: number;
  flightCode: string;
  status: FLIGHT_STATUS;
  departureAirportCode: string;
  arrivalAirportCode: string;
  departureTime: string;
  arrivalTime: string;
  dayOfOperation: Day[];
}

export interface BasePriceAPI {
  bookingClass: BookingClass;
  price: number;
}

export interface FlightDetailPageResponse extends FlightBasicInfoAPI {
  prices: {
    [key in BookingClassCategory]: BasePriceAPI[];
  };
}

export interface ManageFlightPageResponse {
  result: FlightBasicInfoAPI[];
}
