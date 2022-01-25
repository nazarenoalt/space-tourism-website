import React from 'react';
// styles
import { Wrapper } from './NavList.css';
// molecules
import NavLi from '../../molecules/NavLi';

const NavList = () => {
  return (
    <Wrapper>
      <NavLi key="01" order="01">Home</NavLi>
      <NavLi key="02" order="02">Destination</NavLi>
      <NavLi key="03" order="03">Crew</NavLi>
      <NavLi key="04" order="04">Technology</NavLi>
    </Wrapper>
  );
};

export default NavList;
