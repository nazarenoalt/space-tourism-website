import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  border-sizing: border-box;

  --light-blue: #D0D6F9;
  --white: #FFF;
  --black: #0B0D17;
}

body {
  background: var(--black);
}

h1,
h2,
h3,
h4,
h5 {
}

`