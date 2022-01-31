import styled from "styled-components";

export const HoverShadow = styled.div`
  position: absolute;
  background: var(--transparent-dark-grayish-blue);
  border-radius: 100%;
  transition: all .25s;
  width: 150px;
  height: 150px;
  
  @media screen and (min-width: 768px) {
    width: 242px;
    height: 242px;

    left:-25%;
    top: -25%;
  }

  @media screen and (min-width: 1440px) {
    width: 274px;
    height: 274px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  margin: 50px;

  :hover {
    ${HoverShadow} {
      transform: scale(1.5);
    }
  }

  
`;



export const Button = styled.div`
  position: absolute;
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: var(--white);
  border: none;
  border-radius: 100%;
  cursor: pointer;
 
  
  span {
    color: var(--black);
    font-size: 20px;
    letter-spacing: 1.55px;
    font-family: "Bellefair", serif;
    text-transform: uppercase;
  }

  @media screen and (min-width: 768px) {
    width: 242px;
    height: 242px;
    align-items: space-around;
    left:-25%;
    top: -25%;
    span {
      font-size: 32px;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 274px;
    height: 274px;
  }
`;