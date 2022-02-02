import styled from "styled-components";
// assets
import mobileBackground from '../../assets/destination/background-destination-mobile.jpg'
import tabletBackground from '../../assets/destination/background-destination-tablet.jpg'
import desktopBackground from '../../assets/destination/background-destination-desktop.jpg'

export const Wrapper = styled.div`
  display: grid;
  place-content: center;
  width: 100vw;
  height: 100vh;
  color: var(--white);
  font-family: "Cormorant Unicase", serif;
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

export const Container = styled.div`
  position: relative;
  color: var(--white);
  font-family: "Cormorant Unicase", serif;
  cursor: pointer;
  padding: 50px 0;

  a {
    color: white;
    text-decoration: none;
  }
  .error-message {
    font-size: 1.5em;
  }

  ::before {
      position: absolute;
      width: 500px;
      text-align: center;
      content: "Tap to go home";
      top: 0;
      left: calc( 50% - 250px );
      opacity: 0;
      transition: all 0.2s;
    }

  :hover {
    ::before {
      opacity: 1;
    }
  }
  @media screen and (min-width: 768px) {
    padding: 50px;

    .error-message {
    font-size: 3em;
    }
  }
`;