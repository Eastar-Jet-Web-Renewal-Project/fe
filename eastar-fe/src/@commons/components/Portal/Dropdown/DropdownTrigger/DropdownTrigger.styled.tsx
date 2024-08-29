import { DefaultStyleFormElement } from "@commons/components/Default/Form/DefaultFormElementStyle";
import { Variants } from "@commons/types/style";
import theme from "@styles/Theme/light.theme";
import styled, { css } from "styled-components";

export type DropdownTriggerVariant = "Filled";

export const DropdownTriggerStyles: Variants<DropdownTriggerVariant> = {
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

export type StyledDropdownTriggerProps = {
  $variant: DropdownTriggerVariant;
  $isDisabled?: boolean;
};

export const StyledDropdownTrigger = styled.div.attrs<StyledDropdownTriggerProps>(
  () => ({
    as: "p",
  }),
)`
  ${DefaultStyleFormElement}

  cursor: pointer;

  ${(props) => DropdownTriggerStyles[props.$variant]}

  //disabled일 경우 위 속성을 모두 무효화
  ${(props) => props.$isDisabled && DropdownTriggerStyles["Disabled"]}
`;
