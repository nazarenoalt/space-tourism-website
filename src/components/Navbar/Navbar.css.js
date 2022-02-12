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
    cursor: pointer;
    z-index: 5;
  }

  @media screen and (min-width: 768px) {
    height: 100px;
    margin-top: 30px;
    .logo {
      width: 48px;
      height: 48px;
      margin: 40px;
    }
  }
`;