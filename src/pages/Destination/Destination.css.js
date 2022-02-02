import styled from "styled-components";
//assets
import mobileBackground from '../../assets/destination/background-destination-mobile.jpg'
import tabletBackground from '../../assets/destination/background-destination-tablet.jpg'
import desktopBackground from '../../assets/destination/background-destination-desktop.jpg'

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: url(${mobileBackground});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 768px) {
    background-image: url(${tabletBackground});
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${desktopBackground});
  }
`;

export const Container = styled.div``;
