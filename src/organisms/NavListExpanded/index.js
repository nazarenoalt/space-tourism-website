import React from 'react';
// styles
import { Wrapper } from './NavListExpanded.css';
// molecules
import NavLi from '../../molecules/NavLi';

const NavListExpanded = ({ option }) => {
  return (
    <Wrapper>
      <NavLi
        key="01"
        value="01"
        address="/"
      >Home</NavLi>
      
      <NavLi
        key="02"
        value="02"
        address="/destination"
      >Destination</NavLi>
      
      <NavLi
        key="03"
        value="03"
        address="/crew"
      >Crew</NavLi>
      
      <NavLi
        key="04"
        value="04"
        address="/technology"
      >Technology</NavLi>
    </Wrapper>
  );
};

export default NavListExpanded;
