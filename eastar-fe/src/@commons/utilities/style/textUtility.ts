import { css } from "styled-components";
import { fontSize, fontWeight } from "../../../styles/font.styles";
import {
  TyphographySize,
  TyphographyType,
  TyphographyWeight,
} from "../../types/font";
import { getColorWithTheme } from "./colorUtility";

/**
 * getFontStyleCSS 함수는 주어진 타이포그래피 타입, 크기, 굵기 및 색상에 따라 CSS 스타일을 생성합니다.
 *
 * @param {TyphographyType} type - 타이포그래피 타입을 지정합니다.
 * @param {TyphographySize} [size] - 선택적으로 타이포그래피 크기를 지정합니다.
 * @param {TyphographyWeight} [weight] - 선택적으로 타이포그래피 굵기를 지정합니다.
 * @param {string} [color] - 선택적으로 타이포그래피 색상을 지정합니다.
 * @returns {FlattenSimpleInterpolation} - 주어진 속성에 따라 생성된 CSS 스타일을 반환합니다.
 *
 * @example
 * const style = getFontStyleCSS('header', 'large', 'bold', '#333');
 * // style은 주어진 속성에 따라 생성된 CSS 스타일을 포함합니다.
 */
export const getFontStyleCSS = (
  type: TyphographyType,
  size?: TyphographySize,
  weight?: TyphographyWeight,
  color?: string,
) => css`
  font-size: ${getFontSize(type, size)};
  font-weight: ${getFontWeight(weight)};
  color: ${getColorWithTheme(color)};
`;
