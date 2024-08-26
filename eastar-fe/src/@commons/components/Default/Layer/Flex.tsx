import styled from "styled-components";

export type FlexProps = {
  $direction?: "row" | "column";
  $justify?: "center" | "flex-start" | "flex-end";
  $align?: "center" | "flex-start" | "flex-end";
  $gap?: number;
};

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
