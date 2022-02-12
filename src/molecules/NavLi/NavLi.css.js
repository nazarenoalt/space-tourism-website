import styled from "styled-components";

export const Wrapper = styled.div`
  a {
    text-decoration: none;
    color: var(--white);
  }

  a:visited {
    text-decoration: none;
    color: var(--white);
  }

  .nav-li {
    margin-bottom: 30px;
    cursor: pointer; 
    
  }

  li.active {
  }
  .nav-li.active,
  .nav-li:hover {
   
    .value-number {
        margin-right: 7px;
    }
    border-right: 3px solid var(--white);
  }


  @media screen and (min-width: 768px) {
    .value-number {
    display: none;
  }

  .nav-li {
    padding: 0 25px;
    height: 100px;
    line-height: 100px;
    transition: all .1s;
  }

  .nav-li.active,
  .nav-li:hover {
    border-right: none;
    border-bottom: 3px solid var(--white);
  }

  }
`;