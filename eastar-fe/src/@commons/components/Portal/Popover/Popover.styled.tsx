import styled from "styled-components";

export const StyledPopoverTrigger = styled.div.attrs((props) => ({
  tabIndex: 0,
  "aria-label": "pop over trigger",
  "aria-haspopup": true,
  role: "button",
}))`
  cursor: pointer;
  margin-bottom: 8px;
`;

type StylePopoverContentProps = {
  $x: number;
  $y: number;
};
export const StylePopoverContent = styled.div.attrs<StylePopoverContentProps>(
  () => ({
    role: "dialog",
    "aria-label": "pop over content",
  }),
)`
  position: fixed;
  top: ${({ $y }) => $y}px;
  left: ${({ $x }) => $x}px;
`;
