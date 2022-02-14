import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// molecules
import NavText from '../NavText';
// styles
import { Wrapper } from './NavLi.css';

const NavLi = ({ children, value, address, onClick }) => {
  const [itemSelected, setItemSelected] = useState(address === window.location.pathname)

  return (
  <Wrapper>
    <Link to={address && address}>
      <li
        className={`nav-li ${itemSelected ? "active" : ""}`}
        onClick={onClick}
        value={value}
      >
        <NavText>
              <b className="value-number">{value && value}</b> {children}
        </NavText>
      </li>
    </Link>
  </Wrapper>
  )
};

export default NavLi;
