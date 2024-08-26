import styled from "styled-components";

export type FlexProps = {
  $direction?: "row" | "column";
  $justify?: "center" | "flex-start" | "flex-end";
  $align?: "center" | "flex-start" | "flex-end";
  $gap?: number;
};

/**
 * Flex 컴포넌트는 flexbox 레이아웃을 사용하여 자식 요소들을 배치하는 컨테이너를 생성합니다.
 *
 * @example
 * <Flex $direction="column" $justify="flex-start" $align="center" $gap={10}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Flex>
 */
const Flex = styled.div.attrs<FlexProps>(
  ({ $direction, $justify, $align, $gap }: FlexProps) => ({
    "aria-label": "flex" + ($direction || "row"),
    $direction: $direction || "row",
    $justify: $justify || "center",
    $align: $align || "flex-start",
    $gap: $gap || 0,
  }),
)`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  justify-content: ${({ $justify }) => $justify};
  align-items: ${({ $align }) => $align};
  gap: ${({ $gap }) => $gap}px;
`;

export default Flex;
