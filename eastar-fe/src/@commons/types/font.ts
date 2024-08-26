import { fontSize, fontWeight } from "../../styles/font.styles";

export type TypographyTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
export type TypographyType = keyof typeof fontSize;
export type TypographySize = {
  [K in keyof typeof fontSize]: keyof (typeof fontSize)[K];
}[keyof typeof fontSize];
export type TypographyWeight = keyof typeof fontWeight;
