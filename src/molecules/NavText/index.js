import React from 'react';
import { P } from './NavText.css';

const NavText = (props) => {
  return <P>{props.children}</P>;
};

export default NavText;
