import React, { useState, useEffect } from 'react';

import { NavLink,Link } from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import './Navbar.css';


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

  return (
    <>
      <nav className='navbar'>
          <p className='navbar-logo' >
          <img src='images/logo.png'/> 
          Observatório de Dados Estatísticos <br/> e Geografícos de Parauapebas
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

                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Indicadores <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')}> 
                        <li> <NavLink  onClick={toggleClass} activeClassName='is-active' to={`/Agronegocio`}> Agronegócio </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Orcamentarios`}> Paineis Orçamentários </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Social`}> Assistência Social </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/DesenvolvimentoHumano`}> Desenvolvimento Humano</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Economia`}> Economia </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Educacao`}> Educação </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Empregos`}> Empregos </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Infraestrutura`}> Infraestrutura </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Mapas`}> Mapas Dinâmicos </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/MeioAmbiente`}> Meio ambiente </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Social`}> Saúde </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Transito`}> Trânsito </NavLink> </li>
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
          <li className='nav-item'>
            <Link
              to='/Services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Perfil do município
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
             Observatório
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;