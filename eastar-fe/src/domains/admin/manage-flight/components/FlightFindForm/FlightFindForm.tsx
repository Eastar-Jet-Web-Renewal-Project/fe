import Button from "@commons/components/Default/Button/Button";
import FormElement from "@commons/components/Default/Form/FormElement/FormElement";
import SingleLineInput from "@commons/components/Default/Form/Input/SingleLineInput";
import TimePicker from "@commons/components/Default/Form/Picker/TimePicker/TimePicker";
import Checkbox from "@commons/components/Default/Form/Selection/Checkbox/Checkbox";
import Typography from "@commons/components/Default/Typography/Typography";
import Dropdown from "@commons/components/Portal/Dropdown/Dropdown";
import { Option } from "@commons/types/commons";
import { useState } from "react";

import airports from "@mocks/airport/airports.json";
import { DAYS } from "@commons/constants/time/days";
import Spacer from "@commons/components/Default/Spacer";

export default function FlightFindForm() {
  //TODO: 추후 object로 처리
  const [flightName, setFlightName] = useState<string>("");
  const [departure, setDeparture] = useState<Option | null>(null);
  const [arrival, setArrival] = useState<Option | null>(null);
  const [departureTime, setDepartureTime] = useState<string>("");
  const [arrivalTime, setArrivalTime] = useState<string>("");
  const [flightDay, setFlightDay] = useState<Option[]>([]);

  return (
    <form>
      <Typography type={"Heading"} size={3} weight="semiBold">
        항공편 검색
      </Typography>
      <Spacer size={20} />
      <FormElement label="항공편 명">
        <SingleLineInput
          placeholder="항공편 명"
          value={flightName}
          onChange={setFlightName}
        />
      </FormElement>

      {/* 전체 공항 정보 찾을 수 있어야 함 */}
      {/* 출 도착은 and 검사 */}
      <FormElement label="출발 공항" isRequired>
        <Dropdown
          optionsProps={{
            options: airports,
            onClick: setDeparture,
          }}
          triggerProps={{
            placeholder: "출발 공항",
            content: departure?.label,
          }}
          isCloseWhenClickOption
        />
      </FormElement>

      <FormElement label="도착 공항" isRequired>
        <Dropdown
          optionsProps={{
            options: airports,
            onClick: setArrival,
          }}
          triggerProps={{ placeholder: "도착 공항", content: arrival?.label }}
          isCloseWhenClickOption
        />
      </FormElement>

      {/* 해당 시간 이후 편 조회 */}
      <FormElement
        label="출발 시간"
        isRequired
        isDisabled={false}
        isVertical={false}
      >
        <TimePicker value={departureTime} onChange={setDepartureTime} />
      </FormElement>

      {/* 해당 시간 이후 편 조회 */}
      <FormElement label="도착 시간">
        <TimePicker value={arrivalTime} onChange={setArrivalTime} />
      </FormElement>
      {/* or 검사 */}
      <FormElement label="운항 요일">
        <Checkbox
          name={"flightDay"}
          options={DAYS}
          selectedOptions={flightDay}
          onCheckboxClick={setFlightDay}
        />
      </FormElement>
      <Spacer size={20} />
      <Button content="검색" style="Filled" />
    </form>
  );
}
