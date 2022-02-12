import styled from 'styled-components';

export const Wrapper = styled.div`
padding-bottom: 100px;

  @media screen and (min-width: 1440px) {
    padding-bottom: 0;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-auto-flow: column;
  }
`;