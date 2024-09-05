import { DAYS } from "./../../constants/time/days";
import {
  BasePriceAPI,
  FlightDetailPageResponse,
} from "@commons/services/api/interfaces/flight/flight";
import { FlightInfo } from "@commons/types/flight/flightInfo";
import { mapValuesToOptions, mapValueToOption } from "../mapping/labelMapping";
import { airports } from "@commons/constants/airport/airport";
import { Day } from "@commons/types/commons";
import { OptionalObject } from "@commons/types/utilType";
import {
  BookingClassCategory,
  FlightPrice,
} from "@commons/types/flight/flightPrice";

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
  return Object.entries(flightInfo.prices).reduce<FlightPrice[]>(
    (prevArr, [bookingClassCategory, basePrices]) =>
      prevArr.concat(
        basePrices.map((basePrice) => ({
          category: bookingClassCategory as BookingClassCategory,
          bookingClass: basePrice.bookingClass,
          price: basePrice.price,
        })),
      ),
    [],
  );
}

export function adaptFlightPricesToFlightDetailPageResponse(
  flightPrices: FlightPrice[],
): OptionalObject<FlightDetailPageResponse> {
  return {
    prices: flightPrices.reduce<{
      [key in BookingClassCategory]: BasePriceAPI[];
    }>(
      (prev, flightPrice) => {
        if (!prev[flightPrice.category]) {
          prev[flightPrice.category] = [];
        }
        prev[flightPrice.category].push({
          bookingClass: flightPrice.bookingClass,
          price: flightPrice.price,
        });
        return prev;
      },
      {} as { [key in BookingClassCategory]: BasePriceAPI[] },
    ),
  };
}
