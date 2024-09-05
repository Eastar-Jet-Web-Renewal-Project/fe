import { getFontSize } from "@commons/utilities/style/textUtility";
import styled from "styled-components";

export const StyledThead = styled.thead`
  width: 100%;
`;

export const StyledTheadTh = styled.th`
  padding: 24px 8px;

  font-size: ${getFontSize("subHeading")};
  text-align: center;
`;
