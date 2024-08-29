import { DefaultStyleFormElement } from "@commons/components/Default/Form/DefaultFormElementStyle";
import styled, { css } from "styled-components";
import { DropdownTriggerVariant } from "../DropdownTrigger/DropdownTrigger.styled";
import { Variants } from "@commons/types/style";
import theme from "@styles/Theme/light.theme";

export type DropdownContentVariant = DropdownTriggerVariant;
const DropdownContentContainerVariantStyles: Variants<DropdownContentVariant> =
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

type StyledDropdownContentContainerProps = {
  $variant: DropdownContentVariant;
  $isDisabled?: boolean;
};

export const StyledDropdownContentContainer = styled(
  DefaultStyleFormElement,
)<StyledDropdownContentContainerProps>`
  width: 100%;
  max-height: 240px;
  box-shadow: 0px 4px 4px ${theme.shadow};
  overflow-y: auto;
  ${(props) => DropdownContentContainerVariantStyles[props.$variant]}

  //disabled일 경우 위 속성을 모두 무효화
  ${(props) =>
    props.$isDisabled && DropdownContentContainerVariantStyles["Disabled"]}
`;

type StyledDropdownContentProps = {
  $variant?: DropdownContentVariant;
  $isHover: boolean;
};

const DropdownContentVariantStyles: Variants<
  DropdownContentVariant,
  Pick<StyledDropdownContentProps, "$isHover">
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

export const StyledDropdownContent = styled.div<StyledDropdownContentProps>`
  width: 100%;
  padding: 8px 16px;
  &:not(:last-child) {
    border-bottom: solid 1px ${theme.divider};
  }
  cursor: pointer;
  ${({ $variant, $isHover }) =>
    DropdownContentVariantStyles[$variant || "Filled"]}
`;
