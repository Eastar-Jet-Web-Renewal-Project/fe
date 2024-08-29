import { Option } from "@commons/types/commons";
import {
  DropdownContentVariant,
  StyledDropdownContent,
  StyledDropdownContentContainer,
} from "./DropdownContent.styled";
import { useHoverEventList } from "@commons/hooks/useHoverEventList";

export type DropdownContentProps<T> = {
  options: Option<T>[];
  onClick?: (option: Option<T>) => void;
  variant?: DropdownContentVariant;
  isDisabled?: boolean;
};

export default function DropdownContent<T>({
  options,
  onClick,
  variant,
  isDisabled,
}: DropdownContentProps<T>) {
  const { setRef, hoverStates } = useHoverEventList(
    options.reduce(
      (acc, option) => [...acc, option.label],
      new Array<string>(),
    ),
  );
  return (
    <StyledDropdownContentContainer
      $variant={variant || "Filled"}
      $isDisabled={isDisabled}
    >
      {options.map((option) => (
        <StyledDropdownContent
          key={option.label}
          onClick={() => {
            onClick?.(option);
          }}
          $isHover={hoverStates[option.label]}
          ref={(el) => {
            setRef(option.label)(el);
          }}
        >
          {option.label}
        </StyledDropdownContent>
      ))}
    </StyledDropdownContentContainer>
  );
}
