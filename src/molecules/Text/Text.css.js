import styled from "styled-components";

export const P = styled.p`
  font-family: 'Barlow', serif;
  color: var(--white);
  font-size: 16x;
  line-height:  28px;
  text-align: center;
  color: var(--light-blue);
  letter-spacing: 1px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;