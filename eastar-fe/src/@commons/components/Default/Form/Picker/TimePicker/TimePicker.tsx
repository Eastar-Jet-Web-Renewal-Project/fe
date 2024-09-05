import { ChangeEvent } from "react";
import { DefaultStyleFormElement } from "../../DefaultFormElementStyle";
import { StyledTimePicker } from "./TimePicker.styled";

type TimePickerProps = {
  value: string;
  onChange: (value: string) => void;
  variant?: "Filled";
  isDisabled?: boolean;
  options?: Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "placeholder" | "type"
  >;
};

export default function TimePicker({
  variant,
  isDisabled,
  value,
  onChange,
  options,
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
        value={value}
        onChange={handleChange}
        $isPlaceholder={!value}
        $isDisabled={isDisabled}
        {...options}
      />
    </DefaultStyleFormElement>
  );
}
