import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${(props) => props.theme['background']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }
  input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  body{
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 1.125rem;
  }
  button{
    border: 0;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover{
      background-color: ${(props) => props.theme['base-button-hover']};
    }
  }
  input{
    &:hover{
      box-shadow: 0px 0px 0px 1px ${(props) => props.theme['base-hover']};
    }
    &:focus{
      outline: 0;
      box-shadow: 0px 0px 0px 1px ${(props) => props.theme['base-hover']};
    }
  }
  a{
    text-decoration: none;
  }

`