import { Variants } from "@commons/types/style";
import theme from "@styles/Theme/light.theme";
import styled, { css } from "styled-components";
import { DefaultStyleFormElement } from "../DefaultFormElementStyle";

export type SingleLineInputVariant = "Filled" | "Outlined" | "Text";

export const SingleLineInputStyles: Variants<SingleLineInputVariant> = {
  Filled: css`
    background-color: ${theme.surfaceContainer};
    color: ${theme.onSurfaceContainer};
  `,
  Outlined: css`
    background-color: ${theme.onPrimary};
    color: ${theme.onSurfaceContainer};
    border: solid 1px ${theme.surfaceContainer};
  `,
  Text: css`
    background-color: transparent;
    color: ${theme.primary};
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

export type StyledSingleLineInputProps = {
  $variant: SingleLineInputVariant;
  $isDisabled?: boolean;
};

const StyledSingleLineInput = styled.input.attrs<StyledSingleLineInputProps>(
  () => ({
    as: "input",
    type: "text",
  }),
)`
  ${DefaultStyleFormElement}

  &::placeholder {
    color: ${theme.hint};
  }

  ${(props) => SingleLineInputStyles[props.$variant]}

  //disabled일 경우 위 속성을 모두 무효화
  ${(props) => props.$isDisabled && SingleLineInputStyles["Disabled"]}
`;

export default StyledSingleLineInput;
