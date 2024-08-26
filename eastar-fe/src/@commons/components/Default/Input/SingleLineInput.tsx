import { ChangeEvent, InputHTMLAttributes } from "react";
import StyledSingleLineInput, {
  SingleLineInputVariant,
} from "./SingleLineInput.styled";

type SingleLineInputProps = {
  value: string;
  onChange: (value: string) => void;
  style?: SingleLineInputVariant;
  disabled?: boolean;
  placeholder?: string;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
};

export default function SingleLineInput({
  value,
  onChange,
  style,
  disabled,
  placeholder,
  type,
}: SingleLineInputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    onChange(e.target.value);
  };
  return (
    <StyledSingleLineInput
      type={type || "text"}
      tabIndex={disabled ? -1 : 0}
      $variant={style || "Filled"}
      $isDisabled={disabled}
      onChange={handleChange}
      value={value}
      placeholder={disabled ? "입력하실 수 없습니다" : placeholder}
    />
  );
}
