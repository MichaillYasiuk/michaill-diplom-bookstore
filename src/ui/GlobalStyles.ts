import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`


${theme}

body{
    font-family: 'Tillana', sans-serif;
}
`;
