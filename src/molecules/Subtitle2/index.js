import React from 'react';
import { P } from './Subtitle.css';

const Subtitle = (props) => {
  return <P>{props.children}</P>;
};

export default Subtitle;
