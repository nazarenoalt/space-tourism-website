import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  
  .planet-image {
    padding: 30px 0;
    width: 60%;
    max-width: 280px;
    margin: auto;
  }

  @media screen and (min-width:768px) {
    .planet-image {
      padding: 60px 0;
    }
  }

  @media screen and (min-width:1440px) {
    .planet-image {
    max-width: 445px;
    }
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
    padding-bottom: 15px;
    border-bottom: 4px solid transparent;
    cursor: pointer;
  }

  li:hover {
    color: var(--white);
  }

  .active {
    color: var(--white);
    border-color: var(--white);
  }

  @media screen and (min-width: 768px) {
    li { 
      font-size: 16px;
      margin: 0 20px;
     }
  }

  @media screen and (min-width: 1440px) {
    li { font-size: 18px; }
  }
`;