import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 30px 0 100px;

  @media screen and (min-width: 768px) {
    padding-top: 70px;
  }

  @media screen and (min-width: 1440px) {
    display: grid;
    grid-auto-flow: column-reverse;
    grid-template-columns: 70% auto;
  }
`;