import theme from "@styles/Theme/light.theme";
import styled from "styled-components";

export type StyledDropdownTriggerProps = {
  $isDisabled?: boolean;
  $isPlaceholder: boolean;
};

export const StyledDropdownTrigger = styled.p<StyledDropdownTriggerProps>`
  width: 100%;

  ${({ $isPlaceholder }) => $isPlaceholder && `color: ${theme.hint};`}
`;
