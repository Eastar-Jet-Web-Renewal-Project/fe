import FormElement from "@commons/components/Default/Form/FormElement/FormElement";
import SingleLineInput from "@commons/components/Default/Form/Input/SingleLineInput";
import TimePicker from "@commons/components/Default/Form/Picker/TimePicker/TimePicker";
import Checkbox from "@commons/components/Default/Form/Selection/Checkbox/Checkbox";
import Dropdown from "@commons/components/Portal/Dropdown/Dropdown";

import { DAYS } from "@commons/constants/time/days";
import { Option } from "@commons/types/commons";

export type FlightInfoFormProps = {
  flightInfo: {
    flightCode: string;
    departureAirport: Option;
    arrivalAirport: Option;
    departureTime: string;
    arrivalTime: string;
    dayOfOperation: Option[];
  };
  onFlightInfoChange: (flightInfo: FlightInfoFormProps["flightInfo"]) => void;
  airports: Option[];
};

export default function FlightInfoForm({
  flightInfo,
  onFlightInfoChange,
  airports,
}: FlightInfoFormProps) {
  const handleFlightInfoChange =
    (key: keyof FlightInfoFormProps["flightInfo"]) =>
    (value: FlightInfoFormProps["flightInfo"][typeof key]) => {
      onFlightInfoChange({
        ...flightInfo,
        [key]: value,
      });
    };

  return (
    <form>
      <FormElement label="항공편 명">
        <SingleLineInput
          placeholder="항공편 명"
          value={flightInfo.flightCode}
          onChange={handleFlightInfoChange("flightCode")}
        />
      </FormElement>

      {/* 전체 공항 정보 찾을 수 있어야 함 */}
      {/* 출 도착은 and 검사 */}
      <FormElement label="출발 공항" isRequired>
        <Dropdown
          optionsProps={{
            options: airports,
            onClick: handleFlightInfoChange("departureAirport"),
          }}
          triggerProps={{
            placeholder: "출발 공항",
            content: flightInfo.departureAirport.label,
          }}
          isCloseWhenClickOption
        />
      </FormElement>

      <FormElement label="도착 공항" isRequired>
        <Dropdown
          optionsProps={{
            options: airports,
            onClick: handleFlightInfoChange("arrivalAirport"),
          }}
          triggerProps={{
            placeholder: "도착 공항",
            content: flightInfo.arrivalAirport.label,
          }}
          isCloseWhenClickOption
        />
      </FormElement>

      {/* 해당 시간 이후 편 조회 */}
      <FormElement label="출발 시간" isRequired>
        <TimePicker
          value={flightInfo.departureTime}
          onChange={handleFlightInfoChange("departureTime")}
        />
      </FormElement>

      {/* 해당 시간 이후 편 조회 */}
      <FormElement label="도착 시간">
        <TimePicker
          value={flightInfo.arrivalTime}
          onChange={handleFlightInfoChange("arrivalTime")}
        />
      </FormElement>
      {/* or 검사 */}
      <FormElement label="운항 요일">
        <Checkbox
          name={"dayOfOperation"}
          options={DAYS}
          selectedOptions={flightInfo.dayOfOperation}
          onCheckboxClick={handleFlightInfoChange("dayOfOperation")}
        />
      </FormElement>
    </form>
  );
}
