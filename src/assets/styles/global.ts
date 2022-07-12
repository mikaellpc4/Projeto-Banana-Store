import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  

  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
    
  body{
      background: ${(props) => props.theme.colors.background};
      font-size: 1.4rem;
      color: #333;
      font-family: sans-serif;
  }

  li, a , button{
    text-decoration: none;
    list-style: none;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 1,6rem;
    color: ${(props) => props.theme.colors.text} 
  }

`;
