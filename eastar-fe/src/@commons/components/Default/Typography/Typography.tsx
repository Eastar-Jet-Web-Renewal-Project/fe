import {
  TypographyType,
  TypographySize,
  TypographyWeight,
} from "../../../types/font";
import { Theme } from "../../../types/style";
import { StyledTypography } from "./Typography.styled";

type TypographyProps = {
  type: TypographyType;
  size?: TypographySize;
  weight?: TypographyWeight;
  color?: Theme | string;
  children: React.ReactNode;
};

/**
 * Typography 컴포넌트는 주어진 타이포그래피 타입, 크기, 굵기 및 색상에 따라 스타일이 적용된 텍스트를 렌더링합니다.
 *
 * 이 컴포넌트는 styled-components 라이브러리를 사용하여 스타일이 적용된 컴포넌트를 생성하며,
 * TypographyType에 따라 적절한 HTML 태그(h1, h2, h3, p 등)로 렌더링됩니다.
 *
 * @example
 * <Typography type="Hero" size="1" weight="bold" color="primary">
 *   제목 텍스트
 * </Typography>
 * // 이 예제는 'Hero' 타입의 '1' 크기, 'bold' 굵기, 'primary' 색상이 적용된 제목 텍스트를 렌더링합니다.
 */
export default function Typography({
  type,
  size,
  weight,
  color,
  children,
}: TypographyProps) {
  return (
    <StyledTypography $type={type} $size={size} $weight={weight} $color={color}>
      {children}
    </StyledTypography>
  );
}
