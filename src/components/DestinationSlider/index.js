import React from 'react';
// styles
import { Wrapper, Container, List } from './DestinationSlider.css';
// molecules
import H1 from '../../molecules/H1';
import H2 from '../../molecules/H2';
import H3 from '../../molecules/H3';
import H4 from '../../molecules/H4';
import H5 from '../../molecules/H5';
import Subtitle2 from '../../molecules/Subtitle2';
import NavText from '../../molecules/NavText';
import Text from '../../molecules/Text';
// assets
import moonImage from '../../assets/destination/image-moon.webp';
import marsImage from '../../assets/destination/image-mars.webp';
import europaImage from '../../assets/destination/image-europa.webp';
import titanImage from '../../assets/destination/image-titan.webp';

const DestinationSlider = () => {
  const [image, setImage] = React.useState(moonImage);
  const [activeLi, setActiveLi] = React.useState(0);

  const handleListClick = (liNumber) => {
  }

  return (
    <Wrapper>
      <Container>
        <Subtitle2 className="title">
          <span className="title__number-order">01</span>
          PICK YOUR DESTINATION
        </Subtitle2>
        <img src={image} className="planet-image" />
        <List>
          <li onClick={() => handleListClick(0)} className="li active">
            <span>MOON</span>
          </li>
          <li onClick={() => handleListClick(1)} className="li active">
            <span>MARS</span>
          </li>
          <li onClick={() => handleListClick(2)} className="li active">
            <span>EUROPA</span>
          </li>
          <li onClick={() => handleListClick(3)} className="li active">
            <span>TITAN</span>
          </li>
        </List>
        
      </Container>
    </Wrapper>
  );
};

export default DestinationSlider;
