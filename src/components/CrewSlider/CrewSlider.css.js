import styled from 'styled-components';

export const Wrapper = styled.div`
  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-auto-flow: column;
  }
`;