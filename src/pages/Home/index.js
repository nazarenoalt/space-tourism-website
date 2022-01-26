import React from 'react';
// styles
import { Wrapper } from './Home.css';
// components
import Navbar from '../../components/Navbar';
// molecules
import H1 from '../../molecules/H1';
import H5 from '../../molecules/H5';

const Home = () => {
  return (
    <Wrapper>
      <Navbar />
      <H5>So, you want to travel to</H5>
    </Wrapper>
  )
};

export default Home;
