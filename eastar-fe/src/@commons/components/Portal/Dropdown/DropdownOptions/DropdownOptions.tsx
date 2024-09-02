import { Option } from "@commons/types/commons";
import {
  StyledDropdownOption,
  StyledDropdownOptionsContainer,
} from "./DropdownOptions.styled";
import { useHoverEventList } from "@commons/hooks/useHoverEventList";

export type DropdownOptionsProps<T> = {
  options: Option<T>[];
  onClick?: (option: Option<T>) => void;
  isDisabled?: boolean;
};

export default function DropdownOptions<T>({
  options,
  onClick,
  isDisabled,
}: DropdownOptionsProps<T>) {
  const { setRef, hoverStates } = useHoverEventList(
    options.reduce(
      (acc, option) => [...acc, option.label],
      new Array<string>(),
    ),
  );
  return (
    <StyledDropdownOptionsContainer $isDisabled={isDisabled}>
      {options.map((option) => (
        <StyledDropdownOption
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
        </StyledDropdownOption>
      ))}
    </StyledDropdownOptionsContainer>
  );
}
