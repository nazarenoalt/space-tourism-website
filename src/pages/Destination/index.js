import React from 'react';
import { Wrapper, Container } from './Destination.css';
// components
import DestinationSlider from "../../components/DestinationSlider";

const Destination = () => {
  return (
    <Wrapper>
      <Container>
        <DestinationSlider />
      </Container>
    </Wrapper>
  )
};

export default Destination;
