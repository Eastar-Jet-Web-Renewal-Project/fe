import { Day } from "@commons/types/commons";
import { FLIGHT_STATUS } from "@commons/types/flight/flightInfo";

export type FlightSearchResultTableRow = {
  id: number;
  flightCode: string;
  status: FLIGHT_STATUS;
  departureAirportCode: string;
  arrivalAirportCode: string;
  departureTime: string;
  arrivalTime: string;
  dayOfOperation: Day[];
};
