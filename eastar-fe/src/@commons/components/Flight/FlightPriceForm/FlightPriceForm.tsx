import Table from "@commons/components/Default/Table/Table/Table";
import Thead from "@commons/components/Default/Table/Thead/Thead";
import Tbody from "@commons/components/Default/Table/Tbody/Tbody";
import TableRow from "@commons/components/Default/Table/Tbody/TableRow";
import TableItem from "@commons/components/Default/Table/Tbody/TableItem";
import SingleLineInput from "@commons/components/Default/Form/Input/SingleLineInput";
import { flightFareClassification } from "@commons/constants/flight/flightFare";
import Typography from "@commons/components/Default/Typography/Typography";
import { BookingClass, FlightPrice } from "@commons/types/flight/flightPrice";
import { mapValueToLabel } from "@commons/utilities/mapping/labelMapping";

type FlightPriceFormProps = {
  priceInfo: FlightPrice[];
  onPriceInfoChange?: (
    bookingClass: FlightPrice["bookingClass"],
    price: FlightPrice["price"],
  ) => void;
  isDisabled?: boolean;
};

export default function FlightPriceForm({
  priceInfo,
  onPriceInfoChange,
  isDisabled,
}: FlightPriceFormProps) {
  const handleChangePrice =
    (bookingClass: BookingClass) =>
    (value: string): void => {
      if (isDisabled) return;

      onPriceInfoChange?.(bookingClass, parseInt(value));
    };

  return (
    <form>
      <Table>
        <Thead columns={["운임 구분", "부킹 클래스", "가격"]} />
        <Tbody>
          {priceInfo.map((fare) => (
            <TableRow key={fare.bookingClass}>
              <TableItem>
                {mapValueToLabel(flightFareClassification, fare.category)}
              </TableItem>
              <TableItem>
                <Typography type="body" weight="bold" color="primary">
                  {fare.bookingClass}
                </Typography>
              </TableItem>
              <TableItem>
                <SingleLineInput
                  value={String(fare.price)}
                  onChange={handleChangePrice(fare.bookingClass)}
                  style="Text"
                  type={isDisabled ? "text" : "number"}
                  options={{
                    min: 0,
                    step: 1000,
                  }}
                />
              </TableItem>
            </TableRow>
          ))}
        </Tbody>
      </Table>
    </form>
  );
}
