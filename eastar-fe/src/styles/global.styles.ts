import { createGlobalStyle } from "styled-components";
import { focusAccessibilityStyles } from "./accessibility.styles";
import { resetCSS } from "./reset.styles";
import { fontStyle } from "./font.styles";

const GlobalStyles = createGlobalStyle`
    ${resetCSS}
    
    *{
        -webkit-tap-highlight-color: transparent;
        box-sizing: border-box;
        
        /* 폰트 스타일 */
        ${fontStyle}

        /* 접근성 스타일 */
        ${focusAccessibilityStyles}

    }
`;

export default GlobalStyles;
