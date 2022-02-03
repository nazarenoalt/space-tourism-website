import React from 'react';
// styles
import { Container, List } from './DestinationList.css';
// molecules
import Subtitle2 from '../../molecules/Subtitle2';

const DestinationList = ({
  image,
  handleListClick,
  
}) => {
 

  return (
      <Container>
        <Subtitle2 className="title">
          <span className="title__number-order">01</span>
          PICK YOUR DESTINATION
        </Subtitle2>
        <img src={image} className="planet-image" />
        <List>
          <li onClick={(e) => handleListClick(e, 0)} className="li active">
            <span>MOON</span>
          </li>
          <li onClick={(e) => handleListClick(e, 1)} className="li">
            <span>MARS</span>
          </li>
          <li onClick={(e) => handleListClick(e, 2)} className="li">
            <span>EUROPA</span>
          </li>
          <li onClick={(e) => handleListClick(e, 3)} className="li">
            <span>TITAN</span>
          </li>
        </List>
      </Container>
  );
};

export default DestinationList;
