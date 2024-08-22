import { ChangeEvent } from "react";
import StyledSingleLineInput, {
  SingleLineInputVariant,
} from "./SingleLineInput.styled";

type SingleLineInputProps = {
  value: string;
  onChange: (value: string) => void;
  style?: SingleLineInputVariant;
  disabled?: boolean;
};

export default function SingleLineInput({
  value,
  onChange,
  style,
  disabled,
}: SingleLineInputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <StyledSingleLineInput
      tabIndex={disabled ? -1 : 0}
      $variant={style || "Filled"}
      $isDisabled={disabled}
      onChange={handleChange}
      value={value}
    />
  );
}
