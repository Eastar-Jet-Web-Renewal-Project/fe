import styled from "styled-components";
import theme from "../../../../styles/Theme/light.theme";

type StyledDividerProps = {
  $isVertical?: boolean;
};

export const StyledDivider = styled.div<StyledDividerProps>`
  ${({ $isVertical }) =>
    $isVertical
      ? `width: 1px !important; height: 100%;`
      : `width: 100%; height: 1px !important;`}

  background-color: ${theme.divider};
`;
