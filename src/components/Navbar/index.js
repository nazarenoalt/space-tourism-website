import React, { useState } from 'react';
import BurgerMenu from '../../molecules/BurgerMenu';
// organisms
import NavListMobile from '../../organisms/NavListMobile';

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(true);

  const handleMenuClick = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <div>
      {menuIsOpen
      
      ? <NavListMobile
        handleMenuClick={handleMenuClick}
        menuIsOpen={menuIsOpen}
      />
      : <BurgerMenu 
        handleMenuClick={handleMenuClick}
        menuIsOpen={menuIsOpen}
      />}
      
    </div>
  );
};

export default Navbar;
