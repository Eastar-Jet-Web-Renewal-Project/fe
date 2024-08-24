import styled from "styled-components";
import theme from "../../../../styles/Theme/light.theme";

export type StyledDividerListProps = {
  $isVertical?: boolean;
};

export const StyledDividerList = styled.div<StyledDividerListProps>`
  width: 100%;

  display: flex;
  flex-direction: ${({ $isVertical }) => ($isVertical ? "column" : "row")};
  justify-content: center;
  align-items: center;
`;

export type StyledDividerProps = {
  $isVertical?: boolean;
};

export const StyledDivider = styled.span<StyledDividerProps>`
  ${({ $isVertical }) => `
      ${$isVertical ? "padding-block" : "padding-inline"}: 15px;
    `}
  &:not(:last-child) {
    ${({ $isVertical }) => `
      ${$isVertical ? "border-bottom" : "border-right"}: solid 1px ${theme.divider};
    `}
  }
`;
