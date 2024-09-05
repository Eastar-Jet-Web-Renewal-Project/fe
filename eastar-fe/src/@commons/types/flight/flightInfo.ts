import { Day, Option } from "../commons";

export type FLIGHT_STATUS =
  | "SEEKING_SLOTS" // 슬롯 확보중
  | "SCHEDULED" // 슬롯 확보 완료, 실 운항 전
  | "CHARTER_PENDING" // 비정기편 검토 중
  | "CHARTER_CONFIRMED" // 비정기편 운항 확정
  | "ACTIVE" // 실 운항 중인 항공편
  | "COMPLETED"; //운항 계획이 완료된 항공편

export type FlightInfo = {
  flightCode: string;
  departureAirport: Option<string>;
  arrivalAirport: Option<string>;
  departureTime: string;
  arrivalTime: string;
  dayOfOperation: Option<Day>[];
};
