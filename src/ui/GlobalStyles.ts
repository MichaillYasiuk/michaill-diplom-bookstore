import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
${theme}
*{
    box-sizing: border-box;
    padding:0;
    margin:0;
    
}
ul{
    list-style:none;
}
a{
text-decoration:none;
}
body{
    font-family: 'Tillana', sans-serif;
     }
`;
