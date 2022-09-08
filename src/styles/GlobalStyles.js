import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        width: 100vw;
        height: 100vh;
        margin: 0;
        background-color: #8C11BE;
        display: flex;
        justify-content: center;
    }
    #root {
        width: 85%;
    }
`;

export default GlobalStyles;