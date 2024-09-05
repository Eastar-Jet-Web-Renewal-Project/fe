//TODO: 추후 api를 통해 받아온 데이터를 이용하여 화면에 뿌려주는 로직을 작성해야 합니다.

import Button from "@commons/components/Default/Button/Button";
import Divider from "@commons/components/Default/Divider/Divider";
import Spacer from "@commons/components/Default/Spacer";
import Typography from "@commons/components/Default/Typography/Typography";
import FlightInfoForm from "@commons/components/Flight/FlightForm/FlightInfoForm";
import FlightPriceForm from "@commons/components/Flight/FlightPriceForm/FlightPriceForm";
import { FlightInfo } from "@commons/types/flight/flightInfo";
import { FlightPrice } from "@commons/types/flight/flightPrice";
import {
  StyledFlightDetailLayout,
  StyledFlightDetailLayoutStickyWrapper,
  StyledFligntDetailLayoutContentWrapper,
} from "./FlightDetailLayout.styled";

type FlightDetailLayoutProps = {
  flightInfo: FlightInfo;
  onFlightInfoChange?: (
    field: keyof FlightInfo,
    value: FlightInfo[typeof field],
  ) => void;
  priceInfo: FlightPrice[];
  onPriceInfoChange?: (
    bookingClass: FlightPrice["bookingClass"],
    price: FlightPrice["price"],
  ) => void;
  onSubmit: () => void;
  isEditMode?: boolean;
};

export default function FlightDetailLayout({
  flightInfo,
  onFlightInfoChange,
  priceInfo,
  onPriceInfoChange,
  onSubmit,
  isEditMode,
}: FlightDetailLayoutProps) {
  return (
    <StyledFlightDetailLayout>
      <div>
        <Typography
          type={"Heading"}
          size={1}
          weight={"extraBold"}
          color="primary"
        >
          Flight Schedule
        </Typography>
        <Spacer size={12} />
        <Divider />
        <Spacer size={24} />
      </div>

      <StyledFligntDetailLayoutContentWrapper>
        <StyledFlightDetailLayoutStickyWrapper>
          <Typography type={"Heading"} size={2} weight={"semiBold"}>
            Flight Schedule
          </Typography>
          <Spacer size={20} />
          <FlightInfoForm
            flightInfo={flightInfo}
            onFlightInfoChange={onFlightInfoChange}
            isDisabled={!isEditMode}
          />
          <Spacer size={12} />
          <Divider />
          <Spacer size={24} />
          <Button
            content={isEditMode ? "저장하기" : "수정하기"}
            onClick={onSubmit}
          />
        </StyledFlightDetailLayoutStickyWrapper>

        <Spacer size={12} isHorizontal />
        <Divider isVertical />
        <Spacer size={12} isHorizontal />
        <div>
          <Typography type={"Heading"} size={2} weight={"semiBold"}>
            Fare Class pricing
          </Typography>
          <Spacer size={20} />
          <FlightPriceForm
            priceInfo={priceInfo}
            onPriceInfoChange={onPriceInfoChange}
            isDisabled={!isEditMode}
          />
        </div>
      </StyledFligntDetailLayoutContentWrapper>
    </StyledFlightDetailLayout>
  );
}
