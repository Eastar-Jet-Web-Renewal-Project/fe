import { RuleSet } from "styled-components";
import theme from "../../styles/Theme/light.theme";
import { RemovePrefix } from "./utilType";

// Disabled 포함
export type Variants<G extends string, P extends object = object> = {
  [key in G]: RuleSet<P>;
} & {
  Disabled: RuleSet<P>;
};

export type Theme = keyof typeof theme;

export type Remove$Prefix<
  STYLED_PROP extends {
    [key: string]: any;
  },
> = RemovePrefix<STYLED_PROP, "$">;
