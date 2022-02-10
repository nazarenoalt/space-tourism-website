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
`;