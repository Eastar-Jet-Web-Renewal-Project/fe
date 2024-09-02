import { Option } from "@commons/types/commons";

export const flightColumn: Option[] = [
  { label: "id", value: "id" },
  { label: "항공편 명", value: "flightId" },
  { label: "출발 공항", value: "departureAirportCode" },
  { label: "도착 공항", value: "arrivalAirportCode" },
  { label: "출발 시간", value: "departureTime" },
  { label: "도착 시간", value: "arrivalTime" },
  { label: "운항 요일", value: "dayOfOperation" },
];
