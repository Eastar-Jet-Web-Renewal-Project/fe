import { Option } from "@commons/types/commons";
import {
  DropdownContentVariant,
  StyledDropdownContent,
  StyledDropdownContentContainer,
} from "./DropdownContent.styled";

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
        >
          {option.label}
        </StyledDropdownContent>
      ))}
    </StyledDropdownContentContainer>
  );
}
