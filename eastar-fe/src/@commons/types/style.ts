import { RuleSet } from "styled-components";

// Disabled 포함
export type Variants<G extends string> = {
  [key in G]: RuleSet<object>;
} & {
  Disabled: RuleSet<object>;
};
