import {
  DefaultStyleFormElement,
  DefaultStyleFormElementVariant,
} from "@commons/components/Default/Form/DefaultFormElementStyle";
import { StyledDropdownTrigger } from "./DropdownTrigger.styled";

export type DropdownTriggerProps = {
  content?: string;
  style?: DefaultStyleFormElementVariant;
  isDisabled?: boolean;
  placeholder?: string;
};

export default function DropdownTrigger({
  content,
  style,
  isDisabled,
  placeholder,
}: DropdownTriggerProps) {
  return (
    <DefaultStyleFormElement
      $variant={style || "Filled"}
      $isDisabled={isDisabled}
    >
      <StyledDropdownTrigger $isPlaceholder={!content}>
        {content || placeholder || "이 곳을 눌러 가능한 값을 얻을 수 있습니다"}
      </StyledDropdownTrigger>
    </DefaultStyleFormElement>
  );
}
