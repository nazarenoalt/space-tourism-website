import styled from "styled-components";

export const Heading5 = styled.h5`
  font-size: 16px;
  font-family: 'Barlow Condensed', serif;
  letter-spacing: 4px;
  color: var(--light-blue);
  text-transform: uppercase;
  font-weight: 400;
  
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 28px;
  }
`;