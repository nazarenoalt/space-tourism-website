import React from 'react';
// molecules
import Subtitle2 from '../Subtitle2';
// styles
import { Container } from './PageTitle.css';

const PageTitle = ({children, number}) => {
  return (
    <Container>
      <Subtitle2 className="title">
        <span className="title__number-order">{number}</span>
        {children}
      </Subtitle2>
    </Container>
  );
};

export default PageTitle;
