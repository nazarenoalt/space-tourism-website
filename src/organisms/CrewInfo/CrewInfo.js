import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 85%;
  margin: 0 auto;
  z-index: 1;
  h4 {
    opacity: .5;
    margin: 30px 0 10px;
  }

  h3 {
    margin-bottom: 30px;
  }

  @media screen and (min-width: 768px) {
    width: 65%;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 100%;

    padding-top: 150px;
    padding-left: 15%;
    p, h3, h4 {
      text-align: start;
    }

    h3 {
      margin: 25px 0 50px;
    }

    h4 {
      margin: 0;
    }

    p {
      width: 80%;
    }
  }
`;