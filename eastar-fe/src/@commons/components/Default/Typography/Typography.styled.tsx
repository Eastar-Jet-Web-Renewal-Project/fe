import styled from "styled-components";
import {
  TypographyType,
  TypographySize,
  TypographyWeight,
  TypographyTag,
} from "../../../types/font";
import { getFontStyleCSS } from "../../../utilities/style/textUtility";

export const TypographyTagByType: {
  [key in TypographyType]: TypographyTag;
} = {
  Hero: "h1",
  Heading: "h2",
  subHeading: "h3",
  body: "p",
};

export type TypographyProps = {
  $type: TypographyType;
  $size?: TypographySize;
  $weight?: TypographyWeight;
  $color?: string;
};

/**
 * StyledTypography 컴포넌트는 주어진 타이포그래피 타입, 크기, 굵기 및 색상에 따라 스타일이 적용된 텍스트 컴포넌트를 생성합니다.
 *
 * 이 컴포넌트는 styled-components 라이브러리를 사용하여 스타일이 적용된 컴포넌트를 생성하며,
 * `as` prop을 통해 TyphographyType에 따라 적절한 HTML 태그(h1, h2, h3, p 등)로 렌더링됩니다.
 *
 * @param {TypographyProps} props - 타이포그래피 속성을 지정합니다.
 * @param {TypographyType} props.$type - 타이포그래피 타입을 지정합니다.
 * @param {TypographySize} [props.$size] - 선택적으로 타이포그래피 크기를 지정합니다.
 * @param {TypographyWeight} [props.$weight] - 선택적으로 타이포그래피 굵기를 지정합니다.
 * @param {string} [props.$color] - 선택적으로 타이포그래피 색상을 지정합니다.
 *
 * @example
 * <StyledTypoography $type="Hero" $size="1" $weight="bold" $color="primary">
 *   제목 텍스트
 * </StyledTypoography>
 * // 이 예제는 'Hero' 타입의 '1' 크기, 'bold' 굵기, 'primary' 색상이 적용된 제목 텍스트를 렌더링합니다.
 */
export const StyledTypography = styled.p.attrs<TypographyProps>((props) => ({
  as: TypographyTagByType[props.$type],
}))`
  ${({ $type, $size, $weight, $color }) =>
    getFontStyleCSS($type, $size, $weight, $color)};
`;
