import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  color: var(--white);
  height: 100px;
  padding: 0 0 0 50px;
  background-color: var(--dark-grayish-blue);

  .order-number {
    display: none;
  }

  .nav-li {
    padding-right: 50px;
    height: 100px;
    line-height: 100px;
  }
  `;