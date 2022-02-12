import styled from 'styled-components';
// assets
import backgroundMobile from '../../assets/technology/background-technology-mobile.jpg';
import backgroundTablet from '../../assets/technology/background-technology-tablet.jpg';
import backgroundDesktop from '../../assets/technology/background-technology-desktop.jpg';

export const Wrapper = styled.div`
  padding-top: 100px;
  min-height: 100vh;
  background-image: url(${backgroundMobile});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width:768px) {
    padding-top: 150px;
    background-image: url(${backgroundTablet});
  }

  @media screen and (min-width:1440px) {
    padding-top: 200px;
    background-image: url(${backgroundDesktop});
  }
`;