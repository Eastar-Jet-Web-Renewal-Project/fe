import { ChangeEvent } from "react";
import StyledSingleLineInput from "./SingleLineInput.styled";
import {
  DefaultStyleFormElement,
  DefaultStyleFormElementVariant,
} from "../DefaultFormElementStyle";

type SingleLineInputProps = {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  style?: DefaultStyleFormElementVariant;
  type?: React.HTMLInputTypeAttribute;
  options?: Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "placeholder" | "type"
  >;
};

/**
 * 단일 라인의 텍스트 입력 필드를 렌더링합니다.
 *
 * Props:
 * - value: string - 입력 필드의 초기 값
 * - onChange: (value: string) => void - 입력 값이 변경될 때 호출되는 콜백 함수
 * - disabled?: boolean - 입력 필드를 비활성화할지 여부 (선택 사항)
 * - placeholder?: string - 입력 필드의 플레이스홀더 텍스트 (선택 사항)
 * - style?: DefaultStyleFormElementVariant - 입력 필드의 스타일 (선택 사항)
 * - type?: React.HTMLInputTypeAttribute - 입력 필드의 타입 (예: 'text', 'password') (선택 사항)
 * - options?: Omit<React.HTMLAttributes<HTMLInputElement>, "value" | "onChange" | "placeholder" | "type"> - 추가적인 HTML 속성 (선택 사항)
 *
 * 사용 예:
 * ```tsx
 * <SingleLineInput
 *   value={inputValue}
 *   onChange={handleInputChange}
 *   placeholder="Enter text here"
 *   disabled={false}
 *   style={customStyle}
 *   type="text"
 *   options={{ maxLength: 50 }}
 * />
 * ```
 */
export default function SingleLineInput({
  value,
  onChange,
  style,
  disabled,
  placeholder,
  type,
  options,
}: SingleLineInputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    onChange(e.target.value);
  };
  return (
    <DefaultStyleFormElement
      $variant={style || "Filled"}
      $isDisabled={disabled}
    >
      <StyledSingleLineInput
        type={type || "text"}
        onChange={handleChange}
        value={value}
        placeholder={disabled ? "입력하실 수 없습니다" : placeholder}
        {...options}
      />
    </DefaultStyleFormElement>
  );
}
