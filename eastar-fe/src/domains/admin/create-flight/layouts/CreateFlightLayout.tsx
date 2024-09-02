import Divider from "@commons/components/Default/Divider/Divider";
import Spacer from "@commons/components/Default/Spacer";
import Typography from "@commons/components/Default/Typography/Typography";
import FlightInfoForm from "@commons/components/Flight/FlightForm/FlightInfoForm";
import FlightPriceForm from "@commons/components/Flight/FlightPriceForm/FlightPriceForm";
import { StyledCreateFlightLayout } from "./CreateFlight.styled";
import Button from "@commons/components/Default/Button/Button";

export default function CreateFlightLayout() {
  return (
    <StyledCreateFlightLayout>
      <Typography type={"Heading"} weight={"extraBold"}>
        Flight Schedule 등록
      </Typography>
      <Spacer size={20} />
      <FlightInfoForm />

      <Spacer size={25} />
      <Divider />
      <Spacer size={25} />

      <Typography type={"Heading"} weight={"extraBold"}>
        Fare Class pricing 관리
      </Typography>
      <Spacer size={20} />
      <FlightPriceForm />

      <Spacer size={20} />
      <Button content={"등록"} />
    </StyledCreateFlightLayout>
  );
}
