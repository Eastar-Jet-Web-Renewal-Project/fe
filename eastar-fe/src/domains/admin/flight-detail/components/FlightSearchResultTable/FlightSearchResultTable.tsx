import Table from "@commons/components/Default/Table/Table/Table";
import TableItem from "@commons/components/Default/Table/Tbody/TableItem";
import TableRow from "@commons/components/Default/Table/Tbody/TableRow";
import Tbody from "@commons/components/Default/Table/Tbody/Tbody";
import Thead from "@commons/components/Default/Table/Thead/Thead";
import Typography from "@commons/components/Default/Typography/Typography";
import { airports } from "@commons/constants/airport/airport";
import { flightColumn } from "@commons/constants/flight/flightTableColumn";
import { DAYS } from "@commons/constants/time/days";
import {
  mapValuesToLabels,
  mapValueToLabel,
} from "@commons/utilities/mapping/labelMapping";
import { FlightSearchResultTableRow } from "@domains/admin/manage-flight/types/flight";

type FlightSearchResultTableProps = {
  searchResults: FlightSearchResultTableRow[];
  onRowClick?: (flight: FlightSearchResultTableRow) => void;
};

export default function FlightSearchResultTable({
  searchResults,
  onRowClick,
}: FlightSearchResultTableProps) {
  return (
    <Table>
      <Thead columns={flightColumn.map((value) => value.label)} />
      <Tbody>
        {searchResults.map((flight) => (
          <TableRow
            key={flight.id}
            isClickable
            onClick={() => {
              onRowClick?.(flight);
            }}
          >
            <TableItem>{flight.id}</TableItem>
            <TableItem>
              <Typography type={"body"} weight={"bold"} color="primary">
                {flight.flightCode}
              </Typography>
            </TableItem>
            <TableItem>
              {mapValueToLabel(airports, flight.departureAirportCode)}
            </TableItem>
            <TableItem>
              {mapValueToLabel(airports, flight.arrivalAirportCode)}
            </TableItem>
            <TableItem>{flight.departureTime}</TableItem>
            <TableItem>{flight.arrivalTime}</TableItem>
            <TableItem>
              {mapValuesToLabels(DAYS, flight.dayOfOperation).join(", ")}
            </TableItem>
          </TableRow>
        ))}
      </Tbody>
    </Table>
  );
}
