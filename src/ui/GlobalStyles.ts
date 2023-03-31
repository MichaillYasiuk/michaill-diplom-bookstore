import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
${theme}
*{
    box-sizing: border-box;
    padding:0;
    margin:0;
    
}
body{
    font-family: 'Tillana', sans-serif;
     }
`;
