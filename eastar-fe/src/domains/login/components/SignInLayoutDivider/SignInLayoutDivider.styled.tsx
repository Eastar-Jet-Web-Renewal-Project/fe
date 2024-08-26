import styled from "styled-components";

export const StyledSignInLayoutDivider = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;

  & > *:nth-child(2) {
    flex-shrink: 0;
  }
`;
