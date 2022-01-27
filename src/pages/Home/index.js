import React from 'react';
// styles
import { Wrapper, Container } from './Home.css';
// components
import Navbar from '../../components/Navbar';
// molecules
import H1 from '../../molecules/H1';
import H5 from '../../molecules/H5';
import Text from '../../molecules/Text';
import MainButton from '../../molecules/MainButton';


const Home = () => {
  return (
    <Wrapper>
      <Navbar />
      <Container>
        <H5>So, you want to travel to</H5>
        <H1>Space</H1>
        
        <Text>
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
        </Text>
        <div className="button-container">
          <MainButton  />
        </div>
      </Container>

    </Wrapper>
  )
};

export default Home;
