
import './Bi.css';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';
import NavbarSub from './NavbarSub';
import { Container, Row, Col } from 'react-grid-system';
import './BoxLegend.css';
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { GiReceiveMoney } from 'react-icons/gi';


export default function PIBBI() {

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

    return <> <h1 className='indicadortitle'>Economia </h1>
     <NavbarSub/>
     <Container>
  <Row>
    <Col sm={12}> <div className='boxlegend'> 
    <h1 className='titulobi'>PIB: Dados históricos de Parauapebas</h1>
    <Iframe url="https://app.powerbi.com/view?r=eyJrIjoiOWVhOTljZTUtOTg5Yy00ZDBjLWExOTEtZDRmYjQxYTAzMmY1IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9" 
            className="economia"
            height="100%"
            styles={{height: "25px"}} />   <Link  to='/sign-up'>   <Button url="dsf" variant="contained" color="primary" startIcon={ <AiOutlineCloudDownload />} >
           Exportar
            </Button> </Link>  <div className='legend'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id dolor malesuada mi congue pharetra eu et lectus. Morbi imperdiet hendrerit quam eu condimentum. Nulla interdum accumsan augue ut vehicula. Donec id leo vehicula, luctus ipsum eu, iaculis odio. Ut nec nibh augue. Nunc tempus diam et rhoncus sagittis. Nunc eu euismod orci. Donec hendrerit arcu ac blandit sagittis.   </div> </div>
    </Col>

    <Col sm={12}><div className='boxlegend'>
    <h1 className='titulobi'>PIB: Gráfico pizza por cidade</h1>  
    <Iframe url="https://app.powerbi.com/view?r=eyJrIjoiOWI4ZjgyM2MtMTJjNC00YWM1LWExZmYtMjZlODVjOGYyZTQxIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
            width="100%"
            className="economia"
            height="100%"
            styles={{height: "25px"}}/>  <Button to='/sign-up'  variant="contained" color="primary" startIcon={ <AiOutlineCloudDownload />} >
            Exportar
           </Button></div>
    </Col>

    <Col sm={12}><div className='boxlegend'>
    <h1 className='titulobi'>PIB: Gráfico pizza por cidade</h1>  
    <Iframe url="https://app.powerbi.com/view?r=eyJrIjoiOWI4ZjgyM2MtMTJjNC00YWM1LWExZmYtMjZlODVjOGYyZTQxIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
            width="100%"
            className="economia"
            height="100%"
            styles={{height: "25px"}}/> <Button to='/sign-up' variant="contained" color="primary" startIcon={ <AiOutlineCloudDownload />} >
            Exportar
           </Button></div>
    </Col>
  </Row>
</Container>
          </>  
}
