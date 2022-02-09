import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// molecules
import BurgerMenu from '../../molecules/BurgerMenu';
// organisms
import NavListMobile from '../../organisms/NavListCompressed';
import NavListDesktop from '../../organisms/NavListExpanded';
// assets
import Logo from '../../assets/icons/logo.svg'
// styles
import { Wrapper } from './Navbar.css';
// hooks
import useScreenWidth from '../../hooks/useScreenWidth';

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { width } = useScreenWidth();
  
  const handleMenuClick = () => {
    setMenuIsOpen(!menuIsOpen)
  }
  


  return (
    <Wrapper>
      <Link to="/">
        <img className="logo" src={Logo} />
      </Link>
      {width < 768 
      ? menuIsOpen ? <NavListMobile
          handleMenuClick={handleMenuClick}
          menuIsOpen={menuIsOpen}
        />
        : <BurgerMenu 
          handleMenuClick={handleMenuClick}
          menuIsOpen={menuIsOpen}
      /> : <NavListDesktop />}
      
      
    </Wrapper>
  );
};

export default Navbar;
