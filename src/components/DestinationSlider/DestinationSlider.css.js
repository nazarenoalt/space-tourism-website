import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  place-content: center;
  padding-top: 100px;

  @media screen and (min-width: 768px) {
    padding-top: 150px;
  }
`;
