import React from 'react';
// styles
import { Wrapper, Button, HoverShadow } from './MainButton.css';
// molecules
const MainButton = () => {
  return (
    <Wrapper>
      <HoverShadow />
      <Button><span>Explore</span></Button>
    </Wrapper>
  );
};

export default MainButton;
