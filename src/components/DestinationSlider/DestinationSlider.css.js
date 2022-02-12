import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  place-content: center;
  padding: 100px 0 50px;

  @media screen and (min-width: 768px) {
    padding-top: 150px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 0px;
    grid-auto-flow: column;
    grid-template-columns: 50%
  }


`;
