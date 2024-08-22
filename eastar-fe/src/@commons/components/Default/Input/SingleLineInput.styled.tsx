import styled, { css } from "styled-components";
import { Variants } from "../../../types/style";
import theme from "../../../../styles/Theme/light.theme";
import { border } from "../../../../styles/border.styles";

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
    background-color: ${theme.surfaceContainer};
    color: ${theme.onSurfaceContainer};
    cursor: not-allowed;
  `,
};

export type StyledSingleLineInputProps = {
  $variant: SingleLineInputVariant;
  $isDisabled?: boolean;
};

const StyledSingleLineInput = styled.input<StyledSingleLineInputProps>`
  width: 100%;

  padding: 18px 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border: none;
  border-radius: ${border.radius.medium};

  ${(props) => SingleLineInputStyles[props.$variant]}

  //disabled일 경우 위 속성을 모두 무효화
  ${(props) => props.$isDisabled && SingleLineInputStyles["Disabled"]}
`;

export default StyledSingleLineInput;
