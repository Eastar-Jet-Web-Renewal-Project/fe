export type BookingClassCategory =
  | "Normal Fare"
  | "Discount Fare"
  | "Special Fare";

export type BookingClass =
  | "Y"
  | "B"
  | "H"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "R"
  | "S"
  | "U"
  | "V"
  | "W"
  | "X"
  | "T"
  | "E"
  | "I";

export type FlightPrice = {
  category: BookingClassCategory;
  bookingClass: BookingClass;
  price: number;
};
