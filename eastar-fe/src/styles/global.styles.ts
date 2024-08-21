import { createGlobalStyle } from "styled-components";
import theme from "./Theme/light.theme";
import { focusAccessibilityStyles } from "./accessibility.styles";

const GlobalStyles = createGlobalStyle`

*{
    -webkit-tap-highlight-color: transparent;


    /*  포커스 스타일 */
    ${focusAccessibilityStyles}
}
`;

export default GlobalStyles;
