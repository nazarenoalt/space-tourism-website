import styled from "styled-components";
// assets
import mobileBackground from '../../assets/home/background-home-mobile.jpg'
import tabletBackground from '../../assets/home/background-home-tablet.jpg'
import desktopBackground from '../../assets/home/background-home-desktop.jpg'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${mobileBackground});
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
 }

 @media screen and (min-width: 768px) {
  padding: 100px 17% 0;
  justify-content: space-around;
  background-image: url(${tabletBackground});
  background-size: cover;
  background-position: 50% 50%;
 }

  @media screen and (min-width: 1440px) {
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  padding: 100px 15% 0;
  background-image: url(${desktopBackground});
  background-size: cover;
  background-position: 50% 50%;

  .text-container {
    max-width: 500px;
  }

  .button-container {
    justify-content: flex-end;
  }
}
`;