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
  return (
    <StyledTimePicker
      type="time"
      $variant={variant || "Filled"}
      $isDisabled={isDisabled}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
