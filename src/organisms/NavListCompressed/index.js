import React from 'react';
// styles
import { Wrapper } from './NavListCompressed.css';
// molecules
import NavLi from '../../molecules/NavLi';
import BurgerMenu from '../../molecules/BurgerMenu';

const NavListMobile = ({ handleMenuClick, menuIsOpen, handleOption, option }) => {
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
          option={option}
          onClick={(e) => {
            handleMenuClick();
            handleOption(e);
          }}
        >Home</NavLi>

        <NavLi
          key="02"
          value="02"
          address="/destination"
          option={option}
          onClick={(e) => {
            handleMenuClick();
            handleOption(e);
          }}
        >Destination</NavLi>

        <NavLi
          key="03"
          value="03"
          address="/crew"
          option={option}
          onClick={(e) => {
            handleMenuClick();
            handleOption(e);
          }}
        >Crew</NavLi>

        <NavLi
          key="04"
          value="04"
          address="/technology"
          option={option}
          onClick={(e) => {
            handleMenuClick();
            handleOption(e);
          }}
        >Technology</NavLi>
      </ul>
    </Wrapper>
  );
};

export default NavListMobile;
