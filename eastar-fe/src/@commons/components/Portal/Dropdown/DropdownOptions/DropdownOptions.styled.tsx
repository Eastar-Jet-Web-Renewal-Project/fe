import { DefaultStyleFormElement } from "@commons/components/Default/Form/DefaultFormElementStyle";
import styled, { css } from "styled-components";
import { DropdownTriggerVariant } from "../DropdownTrigger/DropdownTrigger.styled";
import { Variants } from "@commons/types/style";
import theme from "@styles/Theme/light.theme";

export type DropdownOptionsVariant = DropdownTriggerVariant;
const DropdownOptionsContainerVariantStyles: Variants<DropdownOptionsVariant> =
  {
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

type StyledDropdownOptionsContainerProps = {
  $variant: DropdownOptionsVariant;
  $isDisabled?: boolean;
};

export const StyledDropdownOptionsContainer = styled(
  DefaultStyleFormElement,
)<StyledDropdownOptionsContainerProps>`
  width: 100%;
  max-height: 240px;
  box-shadow: 0px 4px 4px ${theme.shadow};
  overflow-y: auto;
  ${(props) => DropdownOptionsContainerVariantStyles[props.$variant]}

  //disabled일 경우 위 속성을 모두 무효화
  ${(props) =>
    props.$isDisabled && DropdownOptionsContainerVariantStyles["Disabled"]}
`;

type StyledDropdownOptionProps = {
  $variant?: DropdownOptionsVariant;
  $isHover: boolean;
};

const DropdownOptionVariantStyles: Variants<
  DropdownOptionsVariant,
  Pick<StyledDropdownOptionProps, "$isHover">
> = {
  Filled: css<{ $isHover: boolean }>`
    ${({ $isHover }) =>
      $isHover &&
      `
      background-color: ${theme.surfaceContainerLowest};
    `}
  `,
  Disabled: css<{ $isHover: boolean }>``,
};

export const StyledDropdownOption = styled.div<StyledDropdownOptionProps>`
  width: 100%;
  padding: 8px 16px;
  &:not(:last-child) {
    border-bottom: solid 1px ${theme.divider};
  }
  cursor: pointer;
  ${({ $variant, $isHover }) =>
    DropdownOptionVariantStyles[$variant || "Filled"]}
`;
