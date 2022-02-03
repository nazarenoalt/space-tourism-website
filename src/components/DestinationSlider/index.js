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
  return (
    <Wrapper>
      <Container>
        <Subtitle2 className="title">
          <span className="title__number-order">01</span>
          PICK YOUR DESTINATION
        </Subtitle2>
        <img src={image} className="planet-image" />
        <List>
          <li className="active">
            <span>MOON</span>
          </li>
          <li >
            <span>MARS</span>
          </li>
          <li >
            <span>EUROPA</span>
          </li>
          <li >
            <span>TITAN</span>
          </li>
        </List>
        
      </Container>
    </Wrapper>
  );
};

export default DestinationSlider;
