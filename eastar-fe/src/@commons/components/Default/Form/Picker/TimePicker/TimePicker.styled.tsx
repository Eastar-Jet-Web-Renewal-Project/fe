import { getFontSize } from "@commons/utilities/style/textUtility";
import theme from "@styles/Theme/light.theme";
import styled from "styled-components";

type StyledTimePickerProps = {
  $isDisabled?: boolean;
  $isPlaceholder: boolean;
};

export const StyledTimePicker = styled.input.attrs<StyledTimePickerProps>(
  ({ $isDisabled }) => ({
    type: $isDisabled ? "text" : "time",
  }),
)`
  width: 100%;
  background: none;
  border: none;
  font-size: ${getFontSize("body", 1)};
  ${({ $isPlaceholder }) => $isPlaceholder && `color: ${theme.hint}`}
`;
