import { css } from "styled-components";
import theme from "./Theme/light.theme";

const focusStyles = css`
  outline: ${theme.primary} auto 1px;
`;

export const focusAccessibilityStyles = css`
  /* 기본 포커스 스타일 */
  :focus {
    ${focusStyles}
  }

  /* 마우스 사용자를 위한 포커스 스타일 제거 */
  :focus:not(:focus-visible) {
    outline: none;
    box-shadow: none;
  }

  /* 키보드 사용자를 위한 포커스 스타일 */
  :focus-visible {
    ${focusStyles}
  }
`;
