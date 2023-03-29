import { createGlobalStyle } from "styled-components";
import { Color } from "./colors";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`


${theme}

body{
    font-family: 'Nunito Sans', sans-serif;
    
    color: ${Color.PRIMARY};
}
`;
