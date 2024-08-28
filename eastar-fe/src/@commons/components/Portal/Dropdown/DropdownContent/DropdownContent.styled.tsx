import { DefaultStyleFormElement } from "@commons/components/Default/Form/DefaultFormElementStyle";
import styled, { css } from "styled-components";
import { DropdownTriggerVariant } from "../DropdownTrigger/DropdownTrigger.styled";
import { Variants } from "@commons/types/style";
import theme from "@styles/Theme/light.theme";

export type DropdownContentVariant = DropdownTriggerVariant;
const DropdownContentVariantStyles: Variants<DropdownContentVariant> = {
  Filled: css`
    background-color: ${theme.surfaceContainer};
    color: ${theme.onSurfaceContainer};
  `,
  Disabled: css`
    background-color: ${theme.surfaceContainerHighest};
    color: ${theme.onSurfaceContainerHighest};
    &::placeholder {
      color: ${theme.onSurfaceContainerHighest};
    }
    cursor: not-allowed;
  `,
};

type StyledDropdownContentProps = {
  $variant: DropdownContentVariant;
  $isDisabled?: boolean;
};

export const StyledDropdownContentContainer = styled(
  DefaultStyleFormElement,
)<StyledDropdownContentProps>`
  width: 100%;
  max-height: 240px;
  box-shadow: 0px 4px 4px ${theme.shadow};
  overflow-y: auto;
  ${(props) => DropdownContentVariantStyles[props.$variant]}

  //disabled일 경우 위 속성을 모두 무효화
  ${(props) => props.$isDisabled && DropdownContentVariantStyles["Disabled"]}
`;

export const StyledDropdownContent = styled.div`
  width: 100%;
  padding: 8px 16px;
  &:not(:last-child) {
    border-bottom: solid 1px ${theme.divider};
  }
  cursor: pointer;
`;
