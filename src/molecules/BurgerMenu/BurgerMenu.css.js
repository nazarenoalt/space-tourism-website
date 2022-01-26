import styled from "styled-components";
import openMenuIcon from '../../assets/icons/openMenu.svg';
import closeMenuIcon from '../../assets/icons/closeMenu.svg';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 30px 20px;
`;

export const Button = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${props => props.menuIsOpen ? closeMenuIcon : openMenuIcon});
  margin: 10px;
  background-repeat: no-repeat;
  background-position: 50% 50&;
`;