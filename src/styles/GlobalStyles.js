import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        width: 100vw;
        height: 100vh;
        background-color: red;
    }
`;

export default GlobalStyles;