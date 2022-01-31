import React from 'react';
// styles
import { Wrapper } from './NavListCompressed.css';
// molecules
import NavLi from '../../molecules/NavLi';
import BurgerMenu from '../../molecules/BurgerMenu';

const NavListMobile = ({ handleMenuClick, menuIsOpen }) => {
  return (
    <Wrapper>
      <BurgerMenu 
        handleMenuClick={handleMenuClick}
        menuIsOpen={menuIsOpen}
      />
      
      <ul className="ul-container">
        <NavLi key="01" order="01" address="/">Home</NavLi>
        <NavLi key="02" order="02" address="/destination">Destination</NavLi>
        <NavLi key="03" order="03" address="/crew">Crew</NavLi>
        <NavLi key="04" order="04" address="/technology">Technology</NavLi>
      </ul>
    </Wrapper>
  );
};

export default NavListMobile;
