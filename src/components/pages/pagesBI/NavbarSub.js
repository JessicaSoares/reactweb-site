import React, { useState, useEffect } from 'react';
import { Button } from '../../Button';
import { NavLink,Link } from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import './NavbarSub.css';


function NavbarSub() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);
  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };
  
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
};

  let boxClass = ["main-menu menu-right menuq1"];
  if(isMenu) {
      boxClass.push('menuq2');
  }else{
      boxClass.push('');
  }

  let boxClassSubMenu = ["sub__menus"];
  if(isMenuSubMenu) {
      boxClassSubMenu.push('sub__menus__Active');
  }else {
      boxClassSubMenu.push('');
  }

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbarteste'>

      <p className='navbar-logo-sub' >
          <img src='images/economy-icon.png'/> 
    Economia </p>

          <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item-sub'>
            <Link to='/BalancaBI' className='nav-links-sub' onClick={closeMobileMenu}>
              Balança comercial
            </Link>
          </li>
          <li className='nav-item-sub'>
            <Link
              to='/PIBBI'
              className='nav-links-sub'
              onClick={closeMobileMenu}
            >
            PIB
            </Link>
          </li>
          <li className='nav-item-sub'>
            <Link
              to='/ComercialBI'
              className='nav-links-sub'
              onClick={closeMobileMenu}
            >
            Comércio e industria
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavbarSub;