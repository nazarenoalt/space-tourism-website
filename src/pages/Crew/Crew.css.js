import styled from 'styled-components';
import mobileBackground from '../../assets/crew/background-crew-mobile.jpg';
import tabletBackground from '../../assets/crew/background-crew-tablet.jpg';
import desktopBackground from '../../assets/crew/background-crew-desktop.jpg';
export const Wrapper = styled.div`
  padding: 100px 0 0;
  min-height: 100vh;
  background-image: url(${mobileBackground});
  background-repeat: no-repeat;
  background-size: cover;
  
  @media screen and (min-width:768px) {
    padding: 150px 0 0;
    background-image: url(${tabletBackground});
  }

  @media screen and (min-width: 1440px) {
    padding: 200px 0 0;
    background-image: url(${desktopBackground});
  }
`;