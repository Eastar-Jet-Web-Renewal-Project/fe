import { RuleSet } from "styled-components";
import theme from "../../styles/Theme/light.theme";

// Disabled 포함
export type Variants<G extends string> = {
  [key in G]: RuleSet<object>;
} & {
  Disabled: RuleSet<object>;
};

export type Theme = keyof typeof theme;
