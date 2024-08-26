import { StyledDivider } from "./Divider.styled";

type DividerProps = {
  isVertical?: boolean;
};

/**
 * Divider 컴포넌트는 구분선을 렌더링합니다.
 *
 * @example
 * <Divider isVertical={false} />
 */
export default function Divider({ isVertical }: DividerProps) {
  return <StyledDivider $isVertical={isVertical} />;
}
