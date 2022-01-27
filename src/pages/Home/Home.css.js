import styled from "styled-components";
// assets
import background from '../../assets/home/background-home-mobile.jpg'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-position: 50% 50%;
  color: white;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 100px 7% 0;
  height: 100%;

  .text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

 .button-container {
  margin-top: 20px;
 }

 @media screen and (min-width: 768px) {
   padding: 100px 17% 0;
  justify-content: space-around;
 }
`;