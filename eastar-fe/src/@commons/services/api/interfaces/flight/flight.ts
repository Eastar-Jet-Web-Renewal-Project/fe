import { Day } from "@commons/types/commons";
import { FLIGHT_STATUS } from "@commons/types/flight/flightInfo";
import {
  BookingClass,
  BookingClassCategory,
} from "@commons/types/flight/flightPrice";
import { OptionalObject } from "@commons/types/utilType";

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
  bookingClassCategory: BookingClassCategory;
  bookingClass: BookingClass;
  price: number;
}

export interface FlightBasicAPI extends FlightBasicInfoAPI {
  prices: BasePriceAPI[];
}

export interface FlightDetailPageResponse extends FlightBasicAPI {}

export interface ManageFlightPageResponse {
  result: FlightBasicInfoAPI[];
}

export interface FlightCreatePageRequest
  extends OptionalObject<FlightBasicAPI> {}

export interface BookingClassPolicyResponse {
  policy: {
    id: number;
    bookingClassCategory: BookingClassCategory;
    bookingClass: BookingClass;
  }[];
}
