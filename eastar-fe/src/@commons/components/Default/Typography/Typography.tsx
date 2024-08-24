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
