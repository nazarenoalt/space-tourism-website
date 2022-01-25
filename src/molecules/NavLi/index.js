import React from 'react';
// molecules
import NavText from '../NavText';
// styles
import { Li } from './NavLi.css';

const NavLi = ({ children, order, address }) => {
  return <Li>
    <NavText>
        <b>{order}</b> {children}
    </NavText>
  </Li>;
};

export default NavLi;
