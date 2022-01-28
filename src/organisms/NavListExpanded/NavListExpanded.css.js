import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  color: var(--white);
  height: 100px;
  

  .order-number {
    display: none;
  }

  .nav-li {
    padding: 0 25px;
    height: 100px;
    line-height: 100px;
    background-color: var(--dark-grayish-blue);
    transition: all .25s;
  }

  .nav-li:nth-child(1) {
    padding-left: 50px;
  }
  .nav-li:nth-last-child(1) {
    padding-right: 50px;
  }



  .nav-li:hover {
    filter: brightness(.8);
  }
  `;