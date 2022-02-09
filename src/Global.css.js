import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  word-break: break-word;

  --light-blue: #D0D6F9;
  --white: #FFF;
  --black: #0B0D17;
  --dark-grayish-blue: rgba(23, 24, 38, 82%);
  --transparent-dark-grayish-blue: rgba(0,0,0,0.5);
  --dark-gray: #383B4B;
}

body {
  background: var(--black);
  margin: 0;
  color: var(--white);
}

ul {
  list-style: none;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
}
`