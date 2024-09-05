import Table from "@commons/components/Default/Table/Table/Table";
import Tbody from "@commons/components/Default/Table/Tbody/Tbody";
import Thead from "@commons/components/Default/Table/Thead/Thead";
import Typography from "@commons/components/Default/Typography/Typography";
import TableRow from "@commons/components/Default/Table/Tbody/TableRow";
import TableItem from "@commons/components/Default/Table/Tbody/TableItem";
import Spacer from "@commons/components/Default/Spacer";
import { flightColumn } from "@commons/constants/flight/flightTableColumn";
import { StyledManageFlightLayout } from "./ManageFlightLayout.styled";
import FlightInfoForm from "../../../../@commons/components/Flight/FlightForm/FlightInfoForm";
import { DAYS } from "@commons/constants/time/days";
import { mapValuesToLabels } from "@commons/utilities/mapping/labelMapping";
import Divider from "@commons/components/Default/Divider/Divider";
import Button from "@commons/components/Default/Button/Button";
import { FlightInfo } from "@commons/types/flight/flightInfo";
import FlightSearchResultTable from "@domains/admin/flight-detail/components/FlightSearchResultTable/FlightSearchResultTable";
import { FlightSearchResultTableRow } from "../types/flight";

type ManageFlightLayoutProps = {
  flightInfo: FlightInfo;
  onFlightInfoChange: (
    field: keyof FlightInfo,
    value: FlightInfo[keyof FlightInfo],
  ) => void;
  onSearchFlight: () => void;
  isSearching: boolean;
  onFlightClick: (flight: FlightSearchResultTableRow) => void;
  searchResults: FlightSearchResultTableRow[];
};

export default function ManageFlightLayout({
  flightInfo,
  onFlightInfoChange,
  searchResults,
  onSearchFlight,
  onFlightClick,
  isSearching,
}: ManageFlightLayoutProps) {
  return (
    <StyledManageFlightLayout>
      <Typography type={"Heading"} weight={"extraBold"}>
        항공편 조회
      </Typography>
      <Spacer size={40} />

      <Typography type={"Heading"} size={3} weight="semiBold">
        항공편 검색
      </Typography>
      <Spacer size={20} />
      <FlightInfoForm
        flightInfo={flightInfo}
        onFlightInfoChange={onFlightInfoChange}
        isDisabled={isSearching}
      />
      <Spacer size={20} />
      <Button content="검색" style="Filled" onClick={onSearchFlight} />

      <Spacer size={25} />
      <Divider />
      <Spacer size={25} />

      <Typography type={"Heading"} weight={"extraBold"}>
        항공편 조회 결과
      </Typography>
      <Spacer size={40} />
      <FlightSearchResultTable
        searchResults={searchResults}
        onRowClick={onFlightClick}
      />
    </StyledManageFlightLayout>
  );
}
