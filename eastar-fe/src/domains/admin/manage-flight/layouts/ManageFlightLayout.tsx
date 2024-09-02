import Table from "@commons/components/Default/Table/Table/Table";
import Tbody from "@commons/components/Default/Table/Tbody/Tbody";
import Thead from "@commons/components/Default/Table/Thead/Thead";
import Typography from "@commons/components/Default/Typography/Typography";
import flights from "@mocks/flight/flight.json";
import TableRow from "@commons/components/Default/Table/Tbody/TableRow";
import TableItem from "@commons/components/Default/Table/Tbody/TableItem";
import Spacer from "@commons/components/Default/Spacer";
import { flightColumn } from "@commons/constants/flight/flightTableColumn";
import { ManageFlightLayoutContainer } from "./ManageFlightLayout.styled";
import FlightFindForm from "../components/FlightFindForm/FlightFindForm";
import { DAYS } from "@commons/constants/time/days";
import { mapValuesToLabels } from "@commons/utilities/mapping/labelMapping";

export default function ManageFlightLayout() {
  return (
    <ManageFlightLayoutContainer>
      <Typography type={"Heading"} weight={"extraBold"}>
        항공편 조회
      </Typography>

      <Spacer size={20} />
      <FlightFindForm />
      <Spacer size={20} />

      <Typography type={"Heading"} weight={"extraBold"}>
        항공편 조회 결과
      </Typography>
      <Spacer size={20} />
      <Table>
        <Thead columns={flightColumn} />
        <Tbody>
          {/* 현재는 mock data */}
          {flights.map((flight) => (
            <TableRow key={flight.id} isClickable>
              <TableItem>{flight.id}</TableItem>
              <TableItem>
                <Typography type={"body"} weight={"bold"} color="primary">
                  {flight.flightName}
                </Typography>
              </TableItem>
              <TableItem>{flight.departureAirport}</TableItem>
              <TableItem>{flight.arrivalAirport}</TableItem>
              <TableItem>{flight.departureTime}</TableItem>
              <TableItem>{flight.arrivalTime}</TableItem>
              <TableItem>
                {mapValuesToLabels(DAYS, flight.flightDay).join(", ")}
              </TableItem>
            </TableRow>
          ))}
        </Tbody>
      </Table>
    </ManageFlightLayoutContainer>
  );
}
