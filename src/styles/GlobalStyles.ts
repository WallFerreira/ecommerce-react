import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  body {
    background-color: #f8f8f8;
    color: black;
  }

  body, button, input{
    font-family: "Poppins", sans-serif;

  }

  button{
    cursor: pointer;
    transition: transform 0.1s;

    &

    :hover{
    transform: scale(1.02);
    filter: brightness(1.2);
    transition: transform 0.2s;
   }
   :active{
    transform: scale(1);
   }
  }
`;

