import fareClassMock from "@mocks/flight/fareClass.json";

import Table from "@commons/components/Default/Table/Table/Table";
import Thead from "@commons/components/Default/Table/Thead/Thead";
import Tbody from "@commons/components/Default/Table/Tbody/Tbody";
import TableRow from "@commons/components/Default/Table/Tbody/TableRow";
import TableItem from "@commons/components/Default/Table/Tbody/TableItem";
import SingleLineInput from "@commons/components/Default/Form/Input/SingleLineInput";
import { useState } from "react";
import { mapValueToLabels } from "@commons/utilities/mapping/labelMapping";
import { flightFareClassification } from "@commons/constants/flight/flightFareClassification";
import Typography from "@commons/components/Default/Typography/Typography";

export default function FlightPriceForm() {
  const [fareClass, setFareClass] = useState(
    fareClassMock.map((fare) => ({ ...fare, price: "" })),
  );

  const handleChangePrice =
    (id: number) =>
    (value: string): void => {
      setFareClass(
        fareClass.map((fare) =>
          fare.id === id ? { ...fare, price: value } : fare,
        ),
      );
    };

  return (
    <form>
      <Table>
        <Thead columns={["id", "구분", "Fare Class", "가격"]} />
        <Tbody>
          {fareClassMock.map((fare) => (
            <TableRow key={fare.id}>
              <TableItem>{fare.id}</TableItem>
              <TableItem>
                {mapValueToLabels(
                  flightFareClassification,
                  fare.classification,
                )}
              </TableItem>
              <TableItem>
                <Typography type="body" weight="bold" color="primary">
                  {fare.fareclass}
                </Typography>
              </TableItem>
              <TableItem>
                <SingleLineInput
                  value={fareClass.find((f) => f.id === fare.id)?.price || ""}
                  onChange={handleChangePrice(fare.id)}
                  style="Text"
                  type="number"
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
