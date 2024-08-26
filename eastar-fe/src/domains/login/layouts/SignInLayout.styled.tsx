import styled from "styled-components";

export const SignInLayoutContainer = styled.div`
  margin: 0 auto;
  padding: 120px 20px;

  width: 100%;
  max-width: 320px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SignInForm = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SignInLayoutDivider = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;

  & > *:nth-child(2) {
    flex-shrink: 0;
  }
`;
