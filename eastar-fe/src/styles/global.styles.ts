import { createGlobalStyle } from "styled-components";
import { focusAccessibilityStyles } from "./accessibility.styles";
import { resetCSS } from "./reset.styles";

const GlobalStyles = createGlobalStyle`

*{
    ${resetCSS}

    -webkit-tap-highlight-color: transparent;

    box-sizing: border-box;

    ${focusAccessibilityStyles}

}
`;

export default GlobalStyles;
