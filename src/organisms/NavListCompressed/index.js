import React from 'react';
// styles
import { Wrapper } from './NavListCompressed.css';
// molecules
import NavLi from '../../molecules/NavLi';
import BurgerMenu from '../../molecules/BurgerMenu';

const NavListCompressed = ({ handleMenuClick, menuIsOpen }) => {
  return (
    <Wrapper>
      <BurgerMenu 
        handleMenuClick={handleMenuClick}
        menuIsOpen={menuIsOpen}
      />
      
      <ul className="ul-container">
        <NavLi
          key="01"
          value="01"
          address="/"
          onClick={handleMenuClick}
        >Home</NavLi>

        <NavLi
          key="02"
          value="02"
          address="/destination"
          onClick={handleMenuClick}
        >Destination</NavLi>

        <NavLi
          key="03"
          value="03"
          address="/crew"
          onClick={handleMenuClick}
        >Crew</NavLi>

        <NavLi
          key="04"
          value="04"
          address="/technology"
          onClick={handleMenuClick}
        >Technology</NavLi>
      </ul>
    </Wrapper>
  );
};

export default NavListCompressed;
