import theme from "@styles/Theme/light.theme";
import styled, { css } from "styled-components";

type StyledTbodyProps = {
  $isClickable?: boolean;
};

export const StyledTbody = styled.tbody<StyledTbodyProps>`
  ${({ $isClickable }) => $isClickable && `cursor: pointer;`}
`;

type StyledTbodyTrProps = {
  $isHovered: boolean;
  $isClickable?: boolean;
  $isClicked?: boolean;
};

export const StyledTbodyTr = styled.tr<StyledTbodyTrProps>`
  ${({ $isHovered, $isClickable, $isClicked }) =>
    ($isHovered || ($isClickable && $isClicked)) &&
    css`
      background-color: ${theme.surfaceContainerHighest};
      td {
        color: ${theme.onSurfaceContainerHighest};
      }
    `}
`;

export const StyledTbodyTd = styled.td`
  padding: 16px 0;
  text-align: center;
`;
