import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap');
    font-family: "Roboto", sans-serif!important;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

h1 {
    font-weight: 500;
}
`;
