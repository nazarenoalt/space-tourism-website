import React, { useState } from 'react';
import BurgerMenu from '../../molecules/BurgerMenu';
// organisms
import NavListMobile from '../../organisms/NavListMobile';
// assets
import Logo from '../../assets/icons/logo.svg'
// styles
import { Wrapper } from './Navbar.css';

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(true);

  const handleMenuClick = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <Wrapper>
      <img src={Logo} />
      
      {menuIsOpen
      
      ? <NavListMobile
        handleMenuClick={handleMenuClick}
        menuIsOpen={menuIsOpen}
      />
      : <BurgerMenu 
        handleMenuClick={handleMenuClick}
        menuIsOpen={menuIsOpen}
      />}
      
    </Wrapper>
  );
};

export default Navbar;
