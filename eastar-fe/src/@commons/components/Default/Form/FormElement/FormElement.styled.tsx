import { getFontSize } from "@commons/utilities/style/textUtility";
import theme from "@styles/Theme/light.theme";
import styled from "styled-components";

type StyledFormElementProps = {
  $isVertical: boolean;
};

export const StyledFormElement = styled.div<StyledFormElementProps>`
  padding: 8px 0;

  display: flex;
  flex-direction: ${({ $isVertical }) => ($isVertical ? "column" : "row")};

  align-items: ${({ $isVertical }) => ($isVertical ? "start" : "center")};
  gap: 8px;
`;

export const StyledLabelElement = styled.label`
  min-width: 100px;
  font-size: ${getFontSize("subHeading", 4)};
  text-align: start;
`;

export const StyledAstrik = styled.span`
  font-size: ${getFontSize("subHeading", 3)};
  color: ${theme.primary};
`;
