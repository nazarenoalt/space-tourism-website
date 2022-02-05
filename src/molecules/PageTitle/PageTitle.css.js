import styled from 'styled-components';

export const Container = styled.div`
   .title__number-order {
    padding-right: 10px;
    opacity: 50%;
    font-weight: bold;
  }
  p {
    color: var(--white);
  }
  @media screen and (min-width: 768px) {
    p {
      text-align: start;
      margin-left: 30px;
    }
  }
`;