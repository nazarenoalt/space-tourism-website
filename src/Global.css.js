import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  border-size: border-box;

  --light-blue: #D0D6F9;
  --white: #FFF;
  --black: #0B0D17;
}

h1 {
  font-size: 150px;
}

h2 {
  font-size: 100px;
}

h3 {
  font-size: 56px;
}

h4 {
  font-size: 32px;
}

h5 {
  font-size: 28px;
}
`