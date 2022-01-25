import React from 'react';
import { H5 } from './NavText.css';

const NavText = (props) => {
  return <H5>{props.children}</H5>;
};

export default NavText;
