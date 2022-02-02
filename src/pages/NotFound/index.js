import React from 'react';
import { Link } from 'react-router-dom';
// styles
import { Wrapper, Container } from './NotFound.css';

const NotFound = () => {
  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <h1 className="error-message">Error 404 - Planet Not Found.</h1>
        </Link>
      </Container>
    </Wrapper>
  );
};

export default NotFound;
