import theme from "@styles/Theme/light.theme";
import styled from "styled-components";

export type StyledSingleLineInputProps = {
  $isDisabled?: boolean;
};

const StyledSingleLineInput = styled.input<StyledSingleLineInputProps>`
  width: 100%;
  border: none;
  background: none;
  font: inherit;

  &::placeholder {
    color: ${theme.hint};
  }
`;

export default StyledSingleLineInput;
