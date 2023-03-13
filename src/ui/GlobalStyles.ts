import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    padding:0;
    margin:0;
    
}
body {
    font-family: 'Open Sans', sans-serif;
}
input {
    border:none;
}
button {
  font-family: inherit;
}
`;
