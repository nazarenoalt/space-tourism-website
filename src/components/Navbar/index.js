import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// molecules
import BurgerMenu from '../../molecules/BurgerMenu';
// organisms
import NavListCompressed from '../../organisms/NavListCompressed';
import NavListExpanded from '../../organisms/NavListExpanded';
// assets
import Logo from '../../assets/icons/logo.svg'
// styles
import { Wrapper } from './Navbar.css';
// hooks
import useScreenWidth from '../../hooks/useScreenWidth';
import useSelectOption from '../../hooks/useSelectOption';

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { width } = useScreenWidth();
  const { option, handleOption } = useSelectOption(1);

  const handleMenuClick = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <Wrapper>
      <Link to="/">
        <img className="logo" src={Logo} />
      </Link>
      {width < 768 
      ? menuIsOpen ? <NavListCompressed
          handleMenuClick={handleMenuClick}
          menuIsOpen={menuIsOpen}
        />
        : <BurgerMenu 
          handleMenuClick={handleMenuClick}
          menuIsOpen={menuIsOpen}
      /> : <NavListExpanded
          />}
      
      
    </Wrapper>
  );
};

export default Navbar;
