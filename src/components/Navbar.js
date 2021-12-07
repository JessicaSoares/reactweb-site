import React, { useState, useEffect } from 'react';

import { NavLink,Link } from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import './Navbar.css';
import { AiOutlineCloudDownload } from "react-icons/ai";
import { GiPadlock } from "react-icons/gi";

function Navbar() {
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

  const [click2, setClick2] = useState(false);
  const [button2, setButton2] = useState(true);
  const [dropdown2, setDropdown2] = useState(false);

  const handleClick2 = () => setClick2(!click);
  const closeMobileMenu2 = () => setClick2(false);

  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };

  const [isMenuSubMenu2, setMenuSubMenu2] = useState(false);
  const toggleSubmenu2 = () => {
    setMenuSubMenu2(isMenuSubMenu2 === false ? true : false);
  };
  
  const showButton2 = () => {
    if (window.innerWidth <= 960) {
      setButton2(false);
    } else {
      setButton2(true);
    }
  };

  useEffect(() => {
    showButton2();
  }, []);

  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };

  const [isMenu2, setisMenu2] = useState(false);
  const [isResponsiveclose2, setResponsiveclose2] = useState(false);
  const toggleClass2 = () => {
    setisMenu2(isMenu2 === false ? true : false);
    setResponsiveclose2(isResponsiveclose2 === false ? true : false);
};

  let boxClass2 = ["main-menu menu-right menuq1"];
  if(isMenu2) {
      boxClass2.push('menuq2');
  }else{
      boxClass2.push('');
  }

  let boxClassSubMenu2 = ["sub__menus"];
  if(isMenuSubMenu2) {
      boxClassSubMenu2.push('sub__menus__Active');
  }else {
      boxClassSubMenu2.push('');
  }

  window.addEventListener('resize', showButton2);


  return (
    <>
      <nav className='navbar'>
         
          <p className='navbar-logo' >
          <img src='images/logo.png' className='logo' />
          Observatório de Desenvolvimento <br/> de Parauapebas
          </p>
 
    
          <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Início
            </Link>
          </li>
          <ul className={boxClass.join(' ')}>

<li onClick={toggleSubmenu2} className="menu-item sub__menus__arrows" > <Link to="#"> Perfil do município &nbsp; <FiChevronDown /> </Link>
    <ul className={boxClassSubMenu2.join(' ')}> 
    <li> <NavLink  onClick={closeMobileMenu2} activeClassName='is-active' to={`/Agronegocio`}> Agronegócio </NavLink> </li>
        <li><NavLink onClick={closeMobileMenu2} activeClassName='is-active' to={`/Orcamentarios`}> Paineis Orçamentários </NavLink> </li>
       
    </ul>
</li>
</ul>



          <li className='nav-item'>
            <Link
              to='/Products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
             Mapas dinâmicos
            </Link>
          </li>


                    <ul className={boxClass.join(' ')}>

<li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Indicadores &nbsp;<FiChevronDown /> </Link>
    <ul className={boxClassSubMenu.join(' ')}> 
    <li> <NavLink  onClick={closeMobileMenu} activeClassName='is-active' to={`/Agronegocio`}> Agronegócio </NavLink> </li>

        <li><NavLink onClick={closeMobileMenu} activeClassName='is-active' to={`/Social`}> Social </NavLink> </li>
        <li><NavLink onClick={closeMobileMenu} activeClassName='is-active' to={`/DesenvolvimentoHumano`}> Desenvolvimento Humano</NavLink> </li>
        <li><NavLink onClick={closeMobileMenu} activeClassName='is-active' to={`/Economia`}> Economia </NavLink> </li>
        <li><NavLink onClick={closeMobileMenu} activeClassName='is-active' to={`/Infraestrutura`}> Infraestrutura </NavLink> </li>
        <li><NavLink onClick={closeMobileMenu} activeClassName='is-active' to={`/MeioAmbiente`}> Meio ambiente </NavLink> </li>
        <li><NavLink onClick={closeMobileMenu} activeClassName='is-active' to={`/Transito`}> Trânsito </NavLink> </li>
    </ul>
</li>
</ul>
          <li className='nav-item'>
            <Link
              to='/Products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
             Entrar  &nbsp; <GiPadlock />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;