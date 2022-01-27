import styled from "styled-components";

export const HoverShadow = styled.div`
  position: absolute;
  background: var(--dark-grayish-blue);
  border-radius: 100%;
  transition: all .25s;
  width: 150px;
  height: 150px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: var(--white);
  border: none;
  border-radius: 100%;
 
  
  span {
    color: var(--black);
    font-size: 20px;
    letter-spacing: 1.25px;
    font-family: "Bellefair", serif;
    text-transform: uppercase;
  }

  @media screen and (min-width: 768px) {
    width: 274px;
    height: 274px;
  }
`;