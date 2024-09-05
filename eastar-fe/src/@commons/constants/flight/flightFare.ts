import { Option } from "@commons/types/commons";
import { BookingClassCategory } from "@commons/types/flight/flightPrice";

export const flightFareClassification: Option<BookingClassCategory>[] = [
  { label: "정상 운임", value: "Normal Fare" },
  { label: "할인 운임", value: "Discount Fare" },
  { label: "특가 운임", value: "Special Fare" },
];
