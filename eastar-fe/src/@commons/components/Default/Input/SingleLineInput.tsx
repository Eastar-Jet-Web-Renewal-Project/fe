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

/**
 * SingleLineInput 컴포넌트는 한 줄 텍스트 입력을 위한 입력 필드를 렌더링합니다.
 *
 * @example
 * <SingleLineInput
 *   value={inputValue}
 *   onChange={handleInputChange}
 *   style="Filled"
 *   placeholder="Enter text..."
 * />
 */
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
