import { css } from "styled-components";
import theme from "./Theme/light.theme";

const focusStyles = css`
  outline: ${theme.primary} auto 1px;
`;

export const focusAccessibilityStyles = css`
  /* 기본 포커스 스타일 */
  &:focus {
    outline: none;
  }

  &:focus-visible:not(input) {
    ${focusStyles}
  }

  /* 래거시 브라우저를 위한 포커스 스타일 */
  @supports not selector(:focus-visible) {
    &:focus {
      ${focusStyles}
    }
  }
`;
