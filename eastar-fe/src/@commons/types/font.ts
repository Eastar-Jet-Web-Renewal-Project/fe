import { fontSize, fontWeight } from "../../styles/font.styles";

export type TyphographyTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
export type TyphographyType = keyof typeof fontSize;
export type TyphographySize = {
  [K in keyof typeof fontSize]: keyof (typeof fontSize)[K];
}[keyof typeof fontSize];
export type TyphographyWeight = keyof typeof fontWeight;
