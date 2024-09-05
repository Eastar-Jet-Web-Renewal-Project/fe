import styled from "styled-components";

export const StyledFligntDetailLayoutContentWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  & > div {
    width: 50%;
    height: 100%;
  }
`;

export const StyledFlightDetailLayoutStickyWrapper = styled.div`
  position: sticky;
  top: 24px;
`;
