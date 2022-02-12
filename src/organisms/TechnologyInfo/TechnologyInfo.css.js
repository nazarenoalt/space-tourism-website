import styled from "styled-components";

export const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  h5 {
    text-align: center;
    margin: 30px 0 15px;
  }

  h3 {
    margin-bottom:30px;
  }

  @media screen and (min-width: 768px) {
    width: 65%;

     h5 {
      margin: 30px 0 20px;
    }
  }
`;