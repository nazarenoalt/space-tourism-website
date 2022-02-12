import styled from "styled-components";

const halfScreenWidth = () => {
  return window.screen.width / 2;
}

export const Wrapper = styled.ul`
  display: flex;
  color: var(--white);
  height: 100px;
  backdrop-filter: blur(20px);
  background: rgba(105, 105, 105, 0.1);
  padding: 0 50px;
  
  
  @media screen and (min-width: 1440px) {
    padding-left: 100px;
    padding-right: 250px;

    :before {
      position: absolute;
      top: 50%;
      left: -${window.screen.width / 2.8}px;
      display: block;
      content: "";
      width: ${window.screen.width / 2.6}px;
      border-top: 1px solid var(--white);
      opacity: 50%;
    }
  }

  @media screen and (min-width: 1920px) {
    :before {
      left: -${window.screen.width / 2}px;
      width: ${window.screen.width / 1.9}px;
    }
  }

  `;