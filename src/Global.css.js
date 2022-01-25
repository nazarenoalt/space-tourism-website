import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;

  --light-blue: #D0D6F9;
  --white: #FFF;
  --black: #0B0D17;
}

body {
  background: var(--black);
  margin: 0;
}

ul {
  list-style: none;
  margin: 0;
}

`