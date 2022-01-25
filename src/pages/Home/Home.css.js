import styled from "styled-components";
// assets
import background from '../../assets/home/background-home-mobile.jpg'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 500px;
  min-width: 300px;
  background-image: url(${background});
  background-size: cover;
  background-position: 50% 50%;
  color: white;
`;