import React from 'react';
// styles
import { Wrapper } from './Technology.css';
// molecules
import PageTitle from '../../molecules/PageTitle';
// components
import TechnologySlider from '../../components/TechnologySlider';

const Technology = () => {
  return (
    <Wrapper>
      <PageTitle number="03">SPACE LAUNCH 101</PageTitle>
      <TechnologySlider />
    </Wrapper>
  );
};

export default Technology;
