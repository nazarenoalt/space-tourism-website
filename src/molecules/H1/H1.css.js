import styled from "styled-components";

export const Heading1 = styled.h1`
  font-size: 80px;
  font-family: 'Cormorant Unicase', serif;
  letter-spacing: 10px;
  color: var(--white);
  text-transform: uppercase;
  margin: 25px 0;
  
  @media screen and (min-width: 768px) {
    font-size: 150px;
  }
`;