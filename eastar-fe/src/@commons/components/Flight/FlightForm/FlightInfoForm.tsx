import FormElement from "@commons/components/Default/Form/FormElement/FormElement";
import SingleLineInput from "@commons/components/Default/Form/Input/SingleLineInput";
import TimePicker from "@commons/components/Default/Form/Picker/TimePicker/TimePicker";
import Checkbox from "@commons/components/Default/Form/Selection/Checkbox/Checkbox";
import Dropdown from "@commons/components/Portal/Dropdown/Dropdown";
import { airports } from "@commons/constants/airport/airport";

import { DAYS } from "@commons/constants/time/days";
import { FlightInfo } from "@commons/types/flight/flightInfo";

export type FlightInfoFormProps = {
  flightInfo: FlightInfo;
  onFlightInfoChange?: (
    field: keyof FlightInfo,
    value: FlightInfo[typeof field],
  ) => void;
  isDisabled?: boolean;
};

export default function FlightInfoForm({
  flightInfo,
  onFlightInfoChange,
  isDisabled,
}: FlightInfoFormProps) {
  const handleFlightInfoChange =
    (key: keyof FlightInfo) => (value: FlightInfo[typeof key]) => {
      if (isDisabled) return;

      onFlightInfoChange?.(key, value);
    };

  return (
    <form>
      <FormElement label="항공편 명">
        <SingleLineInput
          placeholder="항공편 명"
          value={flightInfo.flightCode}
          onChange={handleFlightInfoChange("flightCode")}
          isDisabled={isDisabled}
          options={{
            id: "항공편 명",
          }}
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
          isDisabled={isDisabled}
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
          isDisabled={isDisabled}
        />
      </FormElement>

      {/* 해당 시간 이후 편 조회 */}
      <FormElement label="출발 시간" isRequired>
        <TimePicker
          value={flightInfo.departureTime}
          onChange={handleFlightInfoChange("departureTime")}
          isDisabled={isDisabled}
          options={{
            id: "항공편 명",
          }}
        />
      </FormElement>

      {/* 해당 시간 이후 편 조회 */}
      <FormElement label="도착 시간">
        <TimePicker
          value={flightInfo.arrivalTime}
          onChange={handleFlightInfoChange("arrivalTime")}
          isDisabled={isDisabled}
          options={{
            id: "항공편 명",
          }}
        />
      </FormElement>
      {/* or 검사 */}
      <FormElement label="운항 요일">
        <Checkbox
          name={"dayOfOperation"}
          options={DAYS}
          selectedOptions={flightInfo.dayOfOperation}
          onCheckboxClick={handleFlightInfoChange("dayOfOperation")}
          isDisabled={isDisabled}
        />
      </FormElement>
    </form>
  );
}
