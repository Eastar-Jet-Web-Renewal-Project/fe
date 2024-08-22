import styled, { css } from "styled-components";
import { Variants } from "../../../types/style";
import theme from "../../../../styles/Theme/light.theme";
import { textStyle } from "../../../../styles/font.styles";

export type ButtonVariant =
  | "Elevated"
  | "Filled"
  | "FilledTonal"
  | "Outlined"
  | "Text";

export const ButtonVariantStyles: Variants<ButtonVariant> = {
  Elevated: css`
    background-color: ${theme.primary};
    color: ${theme.onPrimary};

    //TODO: 추후 global shadow로 변경
    box-shadow: 2px 2px 10px 0px ${theme.shadow};
  `,
  Filled: css`
    background-color: ${theme.primary};
    color: ${theme.onPrimary};
  `,
  FilledTonal: css`
    //TODO: 현재 Tonal 관련 색상은 없으므로 기본색으로 대체
    background-color: ${theme.primary};
    color: ${theme.onPrimary};
  `,
  Outlined: css`
    background-color: ${theme.onPrimary};
    color: ${theme.primary};
    border: solid 2px ${theme.primary};
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

export type StyledButtonProps = {
  $variant: ButtonVariant;
  $isDisabled?: boolean;
  $isHover?: boolean;
};

export const StyledButton = styled.div<StyledButtonProps>`
  width: 100%;

  padding: 18px 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border-radius: 6px;

  ${textStyle.subHeading[1].normal}

  cursor: pointer;

  //텍스트 선택 방지
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  ${(props) => ButtonVariantStyles[props.$variant]}

  ${(props) =>
    props.$isHover &&
    !props.$isDisabled &&
    `box-shadow: 2px 2px 10px 0px ${theme.shadow};`}

  transition: box-shadow 0.1s ease;

  //disabled일 경우 위 속성을 모두 무효화
  ${(props) => props.$isDisabled && ButtonVariantStyles["Disabled"]}
`;
