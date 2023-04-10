import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import { Color } from "ui";
import { resetCSS } from "./reset";

export const GlobalStyles = createGlobalStyle`
${theme}
${resetCSS}
body{
    font-family: 'Tillana', sans-serif;
    background: ${Color.WHITE};
    color: ${Color.PRIMARY};
     }
`;
