import { Variants } from "@commons/types/style";
import { getFontStyleCSS } from "@commons/utilities/style/textUtility";
import { border } from "@styles/border.styles";
import theme from "@styles/Theme/light.theme";
import styled, { css } from "styled-components";

export type DefaultStyleFormElementVariant = "Filled" | "Text";

export const DefaultStyleFormElementStyles: Variants<DefaultStyleFormElementVariant> =
  {
    Filled: css`
      background-color: ${theme.surfaceContainer};
      color: ${theme.onSurfaceContainer};
    `,
    Text: css`
      background-color: transparent;
      color: ${theme.onSurfaceContainerLowest};
    `,
    Disabled: css`
      background-color: ${theme.surfaceContainerHighest};
      color: ${theme.onSurfaceContainerHighest};
      &::p laceholder {
        color: ${theme.onSurfaceContainerHighest};
      }
      cursor: not-allowed;
    `,
  };

export type DefaultStyleFormElementProps = {
  $variant: DefaultStyleFormElementVariant;
  $isDisabled?: boolean;
};

/**
 * 모든 Form Element에 동일하게 적용되는 스타일베이스 컴포넌트입니다.
 * 다른 styled 컴포넌트에서 as를 통해 원하시는 태그로 변경할 수 있습니다.
 */
export const DefaultStyleFormElement = styled.div<DefaultStyleFormElementProps>`
  width: 100%;
  height: 60px;

  padding: 18px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: none;
  border-radius: ${border.radius.medium};

  ${getFontStyleCSS("body", 1, "normal", theme.onSurfaceContainer)};

  cursor: pointer;

  ${(props) => DefaultStyleFormElementStyles[props.$variant]}

  //disabled일 경우 위 속성을 모두 무효화
${(props) => props.$isDisabled && DefaultStyleFormElementStyles["Disabled"]}
`;
