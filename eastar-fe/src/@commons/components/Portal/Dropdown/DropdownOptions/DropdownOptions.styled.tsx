import {
  DefaultStyleFormElementStyles,
  DefaultStyleFormElementVariant,
} from "@commons/components/Default/Form/DefaultFormElementStyle";
import styled, { css } from "styled-components";
import theme from "@styles/Theme/light.theme";
import { border } from "@styles/border.styles";

type StyledDropdownOptionsContainerProps = {
  $isDisabled?: boolean;
};

export const StyledDropdownOptionsContainer = styled.div<StyledDropdownOptionsContainerProps>`
  max-height: 240px;
  box-shadow: 0px 4px 4px ${theme.shadow};
  overflow-y: auto;

  border-radius: ${border.radius.medium};
`;

type StyledDropdownOptionProps = {
  $variant?: DefaultStyleFormElementVariant;
  $isHover: boolean;
};

export const StyledDropdownOption = styled.div<StyledDropdownOptionProps>`
  width: 100%;
  padding: 16px;
  &:not(:last-child) {
    border-bottom: solid 1px ${theme.divider};
  }
  cursor: pointer;
  ${({ $variant }) => DefaultStyleFormElementStyles[$variant || "Filled"]}
  ${({ $isHover }) =>
    $isHover &&
    css`
      background-color: ${theme.onPrimary};
    `}
`;
