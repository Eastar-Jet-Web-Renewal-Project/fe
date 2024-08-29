import { z_index } from "@styles/zindex.styles";
import styled from "styled-components";

export const StyledPopoverTrigger = styled.div.attrs(() => ({
  tabIndex: 0,
  "aria-label": "pop over trigger",
  "aria-haspopup": true,
  role: "button",
}))`
  width: 100%;
  margin-bottom: 8px;
  cursor: pointer;
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
  z-index: ${z_index.popover};

  width: 100%;
`;
