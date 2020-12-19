import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
   }

   @font-face {
      font-family: 'Lato';
      src: url('./fonts/Lato.ttf');
   }

   @font-face {
      font-family: 'Montserrat';
      src: url('./fonts/Montserrat.ttf');
   }
`