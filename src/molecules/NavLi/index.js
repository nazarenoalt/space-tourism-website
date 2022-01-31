import React from 'react';
import { Link } from 'react-router-dom';
// molecules
import NavText from '../NavText';
// styles
import { Wrapper } from './NavLi.css';

const NavLi = ({ children, order, address }) => {
  return (
  <Wrapper>
    <Link to={address}>
      <li className="nav-li">
        <NavText>
              <b className="order-number">{order}</b> {children}
        </NavText>
      </li>
    </Link>
  </Wrapper>
  )
};

export default NavLi;
