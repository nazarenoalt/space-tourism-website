import React from 'react';
// styles
import { Wrapper, Button } from './BurgerMenu.css';
const BurgerMenu = ({ handleMenuClick, menuIsOpen }) => {
  return (
    <Wrapper 
      
    >
    <Button 
      onClick={handleMenuClick}
      menuIsOpen={menuIsOpen}
    />
    </Wrapper>
  );
};

export default BurgerMenu;
