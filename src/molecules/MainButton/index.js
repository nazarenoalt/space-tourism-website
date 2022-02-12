import React from 'react';
import { Link } from 'react-router-dom'
// styles
import { Wrapper, Button, HoverShadow } from './MainButton.css';
// molecules
const MainButton = () => {
  return (
    <Wrapper>
      <HoverShadow />
      <Link to="/destination">
        <Button><span>Explore</span></Button>
      </Link>
    </Wrapper>
  );
};

export default MainButton;
