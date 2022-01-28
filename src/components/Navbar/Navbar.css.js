import styled from "styled-components";

export const Wrapper = styled.div`  
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 80px;
  
  img {
    width: 40px;
    height: 40px;
    margin: 20px;
    z-index: 5;
  }

  @media screen and (min-width: 768px) {
    height: 100px;

    img {
      width: 48px;
      height: 48px;
      margin: 4git a0px;
    }
  }
`;