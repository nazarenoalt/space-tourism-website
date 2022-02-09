import React from 'react';
// styles
import { Wrapper } from './Crew.css';
// molecules
import PageTitle from '../../molecules/PageTitle';
// organisms
import CrewSlider from '../../components/CrewSlider';

const Crew = () => {
  return (
    <Wrapper>
      <PageTitle number="02">Meet your crew</PageTitle>
      <CrewSlider />
    </Wrapper>
  );
};

export default Crew;
