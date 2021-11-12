import React from 'react';
import './Bi.css';
import Iframe from 'react-iframe';
import Navbarteste from './Navbarteste';
import { Container, Row, Col } from 'react-grid-system';
import BoxLegend from './BoxLegend';
import './BoxLegend.css';

export default function PIBBI() {
    return <> <h1 className='indicadortitle'>Economia</h1>
     <Navbarteste/>
     <Container>
  <Row>
    <Col sm={12}> <div className='boxlegend'> 
    <h1 className='titulobi'>PIB: Dados históricos de Parauapebas</h1>
    <Iframe url="https://app.powerbi.com/view?r=eyJrIjoiOWVhOTljZTUtOTg5Yy00ZDBjLWExOTEtZDRmYjQxYTAzMmY1IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9" 
            className="economia"
            height="100%"
            styles={{height: "25px"}} />  </div>
    </Col>

    <Col sm={12}><div className='boxlegend'>
    <h1 className='titulobi'>PIB: Gráfico pizza por cidade</h1>  
    <Iframe url="https://app.powerbi.com/view?r=eyJrIjoiOWI4ZjgyM2MtMTJjNC00YWM1LWExZmYtMjZlODVjOGYyZTQxIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
            width="100%"
            className="economia"
            height="100%"
            styles={{height: "25px"}}/> </div>
    </Col>

    <Col sm={12}><div className='boxlegend'>
    <h1 className='titulobi'>PIB: Gráfico pizza por cidade</h1>  
    <Iframe url="https://app.powerbi.com/view?r=eyJrIjoiOWI4ZjgyM2MtMTJjNC00YWM1LWExZmYtMjZlODVjOGYyZTQxIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
            width="100%"
            className="economia"
            height="100%"
            styles={{height: "25px"}}/> </div>
    </Col>
  </Row>
</Container>
          </>  
}
