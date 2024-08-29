import { DefaultStyleFormElement } from "../../DefaultFormElementStyle";
import { Variants } from "@commons/types/style";
import theme from "@styles/Theme/light.theme";
import styled, { css } from "styled-components";

export type TimePickerVariant = "Filled";
const TimePickerVariantStyle: Variants<TimePickerVariant> = {
  Filled: css`
    background-color: ${theme.surfaceContainer};
    color: ${theme.onSurfaceContainer};
  `,
  Disabled: css`
    background-color: ${theme.surfaceContainerHighest};
    color: ${theme.onSurfaceContainerHighest};

    cursor: not-allowed;
  `,
};

type StyledTimePickerProps = {
  $variant?: TimePickerVariant;
  $isDisabled?: boolean;
};

export const StyledTimePicker = styled.input.attrs<StyledTimePickerProps>(
  () => ({
    as: "input",
    type: "time",
  }),
)`
  ${DefaultStyleFormElement}

  ${(props) => TimePickerVariantStyle[props.$variant || "Filled"]}

  ${(props) => props.$isDisabled && TimePickerVariantStyle.Disabled}
`;
