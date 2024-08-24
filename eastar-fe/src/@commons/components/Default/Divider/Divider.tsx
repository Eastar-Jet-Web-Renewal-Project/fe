import { StyledDivider } from "./Divider.styled";

type DividerProps = {
  isVertical?: boolean;
};

export default function Divider({ isVertical }: DividerProps) {
  return <StyledDivider $isVertical={isVertical} />;
}
