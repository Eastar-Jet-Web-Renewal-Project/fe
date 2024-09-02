import theme from "@styles/Theme/light.theme";
import styled, { css } from "styled-components";

type StyledTableRowProps = {
  $isHovered: boolean;
  $isClickable?: boolean;
  $isClicked?: boolean;
};

export const StyledTableRow = styled.tr<StyledTableRowProps>`
  ${({ $isHovered, $isClickable, $isClicked }) =>
    ($isHovered || ($isClickable && $isClicked)) &&
    css`
      background-color: ${theme.surfaceContainerHighest};
      td {
        color: ${theme.onSurfaceContainerHighest};
      }
    `}
`;
