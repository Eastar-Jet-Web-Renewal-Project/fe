import { ChangeEvent } from "react";
import { DefaultStyleFormElement } from "../../DefaultFormElementStyle";
import { StyledTimePicker } from "./TimePicker.styled";

type TimePickerProps = {
  value: string;
  onChange: (value: string) => void;
  variant?: "Filled";
  isDisabled?: boolean;
};

export default function TimePicker({
  variant,
  isDisabled,
  value,
  onChange,
}: TimePickerProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (isDisabled) return;
    onChange(e.target.value);
  };

  return (
    <DefaultStyleFormElement
      $variant={variant || "Filled"}
      $isDisabled={isDisabled}
    >
      <StyledTimePicker
        type="time"
        value={value}
        onChange={handleChange}
        $isPlaceholder={!value}
      />
    </DefaultStyleFormElement>
  );
}
