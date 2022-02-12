import React from 'react';
// styles
import { Wrapper } from './NavListExpanded.css';
// molecules
import NavLi from '../../molecules/NavLi';

const NavListExpanded = ({ option, handleOption }) => {
  return (
    <Wrapper>
      <NavLi
        key="01"
        value="01"
        address="/"
        option={option}
        onClick={(e) =>{
          handleOption(e);
        }}
      >Home</NavLi>
      
      <NavLi
        key="02"
        value="02"
        address="/destination"
        option={option}
        onClick={(e) =>{
          handleOption(e);
        }}
      >Destination</NavLi>
      
      <NavLi
        key="03"
        value="03"
        address="/crew"
        option={option}
        onClick={(e) =>{
          handleOption(e);
        }}
      >Crew</NavLi>
      
      <NavLi
        key="04"
        value="04"
        address="/technology"
        option={option}
        onClick={(e) =>{
          handleOption(e);
        }}
      >Technology</NavLi>
    </Wrapper>
  );
};

export default NavListExpanded;
