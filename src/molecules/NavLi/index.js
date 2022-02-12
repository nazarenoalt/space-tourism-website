import React from 'react';
import { Link } from 'react-router-dom';
// molecules
import NavText from '../NavText';
// styles
import { Wrapper } from './NavLi.css';

const NavLi = ({ children, order, address, onClick }) => {
  return (
  <Wrapper>
    <Link to={address && address}>
      <li className="nav-li" onClick={onClick}>
        <NavText>
              <b className="order-number">{order && order}</b> {children}
        </NavText>
      </li>
    </Link>
  </Wrapper>
  )
};

export default NavLi;
