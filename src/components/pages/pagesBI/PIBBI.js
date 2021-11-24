import './Bi.css';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';
import NavbarSub from './NavbarSub';
import { Container, Row, Col } from 'react-grid-system';
import './BoxLegend.css';
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { AiOutlineCloudDownload } from 'react-icons/ai';


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}



export default function PIBBI() {

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);






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

    return (
      <>
        <NavbarSub />
        <section class="page-section-sub bg-primary" id="about">
          <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
              <div class="col-lg-8 text-center">
                <h2 class="text-white mt-0">PIB</h2>
                <hr class="divider divider-light" />
                <p class="text-white-75 mb-4">
                  Produto Interno Bruto é uma forma de mensurar a atividade
                  econômica de uma determinada região (nacional, estadual ou
                  municipal), através de cálculos que levam em consideração a
                  oferta e a demanda de bens e serviços.
                </p>
              </div>
            </div>
          </div>
          </section>
          <section class="page-section-sub-boxlegend " id="about">
        <Container>
          <Row>
            <Col sm={12}>
              {" "}
              <div className="boxlegend">
                <h1 className="titulobi">
                  PIB: Dados históricos de Parauapebas 

                  Height - {window.innerHeight}

                  Width - {window.innerWidth}
                </h1>
                <Iframe
                  url="https://app.powerbi.com/view?r=eyJrIjoiOWVhOTljZTUtOTg5Yy00ZDBjLWExOTEtZDRmYjQxYTAzMmY1IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
                  className="economia"
                  height="100%"

                />{" "}
                <br/>
                <Link to="/sign-up">
                  {" "}
                  <Button
                    url="dsf"
                    variant="contained"
                    color="primary"
                    startIcon={<AiOutlineCloudDownload />}
                  >
                    Exportar
                  </Button>{" "}
                </Link>{" "}
                <div className="legend">
                  {" "}
                  Dados históricos do PIB ao passar do tempo, é possivek ver queda de 2014 para 2015, a partir de 2015 evolução até 2017 que houve uma queda em 2018
                </div>{" "}
              </div>
            </Col>

            <Col sm={12}>
              <div className="boxlegend">
                <h1 className="titulobi">PIB: Gráfico pizza por cidade</h1>
                <Iframe
                  url="https://app.powerbi.com/view?r=eyJrIjoiOWI4ZjgyM2MtMTJjNC00YWM1LWExZmYtMjZlODVjOGYyZTQxIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
                  width="100%"
                  className="economia"
                  height="100%"
                  styles={{ height: "25px" }}
                />{" "}
                <br/>
                <Link to="/sign-up">
                  {" "}
                  <Button
                    url="dsf"
                    variant="contained"
                    color="primary"
                    startIcon={<AiOutlineCloudDownload />}
                  >
                    Exportar
                  </Button>{" "}
                </Link>{" "}
                <div className="legend">
                  {" "}
                  Dados históricos do PIB ao passar do tempo, é possivek ver queda de 2014 para 2015, a partir de 2015 evolução até 2017 que houve uma queda em 2018
                </div>{" "}
              </div>
            </Col>

            <Col sm={12}>
              <div className="boxlegend">
                <h1 className="titulobi">PIB: Gráfico pizza por cidade</h1>
                <Iframe
                  url="https://app.powerbi.com/view?r=eyJrIjoiOWI4ZjgyM2MtMTJjNC00YWM1LWExZmYtMjZlODVjOGYyZTQxIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
                  width="100%"
                  className="economia"
                  height="100%"
                  styles={{ height: "25px" }}
                />{" "}
                <br/>
                <Link to="/sign-up">
                  {" "}
                  <Button
                    url="dsf"
                    variant="contained"
                    color="primary"
                    startIcon={<AiOutlineCloudDownload />}
                  >
                    Exportar
                  </Button>{" "}
                </Link>{" "}
                <div className="legend">
                  {" "}
                  Dados históricos do PIB ao passar do tempo, é possivek ver queda de 2014 para 2015, a partir de 2015 evolução até 2017 que houve uma queda em 2018
                </div>{" "}
              </div>
            </Col>
          </Row>
        </Container>
     
      </section>
       </>
    );  
}
