import styled from "styled-components";

export const Wrapper = styled.div`
  img {
    width: 100%;
    max-width: 100vw;
    margin: 0;
  }

  @media screen and(min-width: 1440px) {
    display: flex;
    align-items: center;
    width: 100%;
    img {
    }
  }
`;