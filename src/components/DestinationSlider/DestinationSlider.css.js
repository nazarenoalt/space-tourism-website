import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  place-content: center;
  padding-top: 100px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  .title__number-order {
    padding-right: 10px;
    opacity: 50%;
    font-weight: bold;
  }

  .planet-image {
    padding: 30px 0;
    max-width: 60%;
    margin: auto;
  }

  .list__li {
    
  }
`;

export const List = styled.div`
 
  display: flex;
  padding: none;
  margin: auto;
  list-style: none;

  li {
    font-family: 'Barlow Condensed', serif;
    letter-spacing: 2.7px;
    margin: 0 10px;
    font-size: 18px;
    text-transform: uppercase;
    transition: all .2s;
    color: var(--light-blue);
  }

  li:hover {
    color: var(--white);
  }

  .active {
    color: var(--white);
    border-bottom: 4px solid var(--white);
    padding-bottom: 15px;
  }

  @media screen and (min-width: 768px) {
    li { font-size: 16px; }
  }

  @media screen and (min-width: 1440px) {
    li { font-size: 18px; }
  }
`;