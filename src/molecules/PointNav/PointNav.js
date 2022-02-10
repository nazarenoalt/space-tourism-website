import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  .point {
    margin:  0 10px;
    width: 10px;
    height: 10px;
    background-color: var(--white);
    border-radius: 100%;
    opacity: .2;
    transition: all .2s;
  }

  .point:hover {
    opacity: .5;
  }

  .point.active {
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    margin-top: 30px;
  }
`;
