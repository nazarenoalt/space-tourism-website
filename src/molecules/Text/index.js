import React from 'react';
import { P } from './Text.css';

const Text = (props) => {
  return <P>{props.children}</P>;
};

export default Text;
