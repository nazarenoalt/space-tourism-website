import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    width: 40px;
    height: 40px;
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 100%;
    transition: all .2s;
  }



  .circle.active {
    background-color: var(--white);
    color: var(--black)
  }

  @media screen and (min-width: 768px) {
    margin: 50px 0;

    .circle {
      width: 60px;
      height: 60px;
      font-size: 24px;
    }
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    bottom: 100px;
    .circle {
        width: 15px;
        height: 15px;
    }
  }
`;
