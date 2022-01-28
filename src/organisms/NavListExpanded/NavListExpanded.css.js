import styled from "styled-components";

const halfScreenWidth = () => {
  return window.screen.width / 2;
}

console.log(halfScreenWidth())
export const Wrapper = styled.ul`
  display: flex;
  color: var(--white);
  height: 100px;
  backdrop-filter: blur(20px);
  background: rgba(105, 105, 105, 0.1);
  padding: 0 50px;
  
  
  .order-number {
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
    border-bottom: 3px solid var(--white);
  }

  @media screen and (min-width: 1440px) {
    padding-left: 100px;
    padding-right: 250px;

    :before {
      position: absolute;
      top: 50%;
      left: -${window.screen.width / 2.5}px;
      display: block;
      content: "";
      width: ${window.screen.width / 2.4}px;
      border-top: 1px solid var(--white);
      opacity: 50%;
    }
  }


  `;