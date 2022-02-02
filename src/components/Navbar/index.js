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

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [width, setWidth] = useState(window.screen.width);
  
  const handleMenuClick = () => {
    setMenuIsOpen(!menuIsOpen)
  }
  
  const handleSetWidth = () => {
    setWidth(window.screen.width);
  };

  useEffect(() => {
    window.addEventListener('resize', handleSetWidth)

    return () => {
      window.removeEventListener('resize', handleSetWidth)
    }
  }, [width, handleSetWidth])

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
