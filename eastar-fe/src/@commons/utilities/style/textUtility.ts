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

/**
 * getFontSize 함수는 주어진 타이포그래피 타입과 선택적인 크기에 따라 폰트 크기를 반환합니다.
 *
 * @param {TyphographyType} type - 타이포그래피 타입을 지정합니다.
 * @param {TyphographySize} [size] - 선택적으로 타이포그래피 크기를 지정합니다. 단, 지정하지 않거나 존재하지 않는 크기를 지정할 경우 기본 크기를 반환합니다.
 * @returns {string} - 주어진 타입과 크기에 해당하는 폰트 크기를 반환합니다.
 *
 * @example
 * const fontSize = getFontSize('Hero', '1');
 * // fontSize는 'Hero' 타입의 '1' 크기에 해당하는 폰트 크기를 포함합니다.
 */
export const getFontSize = (
  type: TyphographyType,
  size?: TyphographySize,
): string => {
  const typeFontSize = fontSize[type];

  if (size && size in typeFontSize) {
    return typeFontSize[size as keyof typeof typeFontSize];
  } else {
    return typeFontSize[1];
  }
};

/**
 * getFontWeight 함수는 주어진 타이포그래피 굵기에 따라 폰트 굵기를 반환합니다.
 *
 * @param {TyphographyWeight} [weight] - 선택적으로 타이포그래피 굵기를 지정합니다.
 * @returns {number} - 주어진 굵기에 해당하는 폰트 굵기를 반환합니다. 만약 굵기가 지정되지 않았거나 유효하지 않으면 기본 굵기(normal)를 반환합니다.
 *
 * @example
 * const fontWeight = getFontWeight('bold');
 * // fontWeight는 'bold'에 해당하는 폰트 굵기를 포함합니다.
 */
export const getFontWeight = (weight?: TyphographyWeight): number =>
  weight && weight in fontWeight ? fontWeight[weight] : fontWeight.normal;
