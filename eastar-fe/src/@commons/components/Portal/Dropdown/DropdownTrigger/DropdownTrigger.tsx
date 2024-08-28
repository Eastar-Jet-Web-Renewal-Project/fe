import {
  DropdownTriggerVariant,
  StyledDropdownTrigger,
} from "./DropdownTrigger.styled";

export type DropdownTriggerProps = {
  content?: string;
  style?: DropdownTriggerVariant;
  disabled?: boolean;
  placeholder?: string;
};

export default function DropdownTrigger({
  content,
  style,
  disabled,
  placeholder,
}: DropdownTriggerProps) {
  return (
    <StyledDropdownTrigger $variant={style || "Filled"} $isDisabled={disabled}>
      {content || placeholder || "이 곳을 눌러 가능한 값을 얻을 수 있습니다"}
    </StyledDropdownTrigger>
  );
}
