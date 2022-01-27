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
  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 7% 0;

 .button-container {
  margin-top: 20px;
 }
`;