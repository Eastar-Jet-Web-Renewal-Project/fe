import { DAYS } from "./../../constants/time/days";
import {
  BasePriceAPI,
  BookingClassPolicyResponse,
  FlightDetailPageResponse,
} from "@commons/services/api/interfaces/flight/flight";
import { FlightInfo } from "@commons/types/flight/flightInfo";
import { mapValuesToOptions, mapValueToOption } from "../mapping/labelMapping";
import { airports } from "@commons/constants/airport/airport";
import { Day } from "@commons/types/commons";
import { OptionalObject } from "@commons/types/utilType";
import { FlightPrice } from "@commons/types/flight/flightPrice";

export function adaptFlightDetailPageResponseToFlightInfo(
  flightInfo: FlightDetailPageResponse,
): FlightInfo {
  return {
    flightCode: flightInfo.flightCode,
    departureAirport: mapValueToOption(
      airports,
      flightInfo.departureAirportCode,
    ),
    arrivalAirport: mapValueToOption(airports, flightInfo.arrivalAirportCode),
    departureTime: flightInfo.departureTime,
    arrivalTime: flightInfo.arrivalTime,
    dayOfOperation: mapValuesToOptions(DAYS, flightInfo.dayOfOperation),
  };
}

export function adaptFlightInfoToFlightDetailPageResponse(
  flightInfo: FlightInfo,
): OptionalObject<FlightDetailPageResponse> {
  return {
    flightCode: flightInfo.flightCode,
    departureAirportCode: flightInfo.departureAirport.value,
    arrivalAirportCode: flightInfo.arrivalAirport.value,
    departureTime: flightInfo.departureTime,
    arrivalTime: flightInfo.arrivalTime,
    dayOfOperation: flightInfo.dayOfOperation.map<Day>((day) => day.value),
  };
}

export function adaptFlightDetailPageResponseToFlightPrices(
  flightInfo: FlightDetailPageResponse,
): FlightPrice[] {
  return flightInfo.prices.map<FlightPrice>((price) => ({
    category: price.bookingClassCategory,
    bookingClass: price.bookingClass,
    price: price.price,
  }));
}

export function adaptFlightPricesToFlightDetailPageResponse(
  flightPrices: FlightPrice[],
): OptionalObject<FlightDetailPageResponse> {
  return {
    prices: flightPrices.map<BasePriceAPI>((price) => ({
      bookingClassCategory: price.category,
      bookingClass: price.bookingClass,
      price: price.price,
    })),
  };
}

export function adaptBookingClassPolicyResponseToFlightPrice(
  bookingClassPolicy: BookingClassPolicyResponse,
): FlightPrice[] {
  return bookingClassPolicy.policy.map<FlightPrice>((policy) => ({
    category: policy.bookingClassCategory,
    bookingClass: policy.bookingClass,
    price: 0,
  }));
}
