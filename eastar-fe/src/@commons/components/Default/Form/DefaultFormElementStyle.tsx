import { getFontStyleCSS } from "@commons/utilities/style/textUtility";
import { border } from "@styles/border.styles";
import theme from "@styles/Theme/light.theme";
import { css } from "styled-components";

/**
 * 모든 Form Element에 동일하게 적용되는 스타일베이스 컴포넌트입니다.
 * 다른 styled 컴포넌트에서 as를 통해 원하시는 태그로 변경할 수 있습니다.
 */
export const DefaultStyleFormElement = css`
  width: 100%;
  min-height: 60px;

  padding: 18px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: none;
  border-radius: ${border.radius.medium};

  ${getFontStyleCSS("body", 1, "normal", theme.onSurfaceContainer)};
`;
