import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      list-style: none;
      text-decoration:none;
      border: none;
      outline: none;
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