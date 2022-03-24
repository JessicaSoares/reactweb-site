import "../../pagesBI/graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../../pagesBI/BoxLegend.css";
import React, { useState, useEffect } from "react";
import MapsItem from "../MapsItem";
import TextSectionItem from "../../pagesBI/TextSectionItem";

import Footer from '../../../Footer';
import NavMaps from '../NavMaps'

export default function Urbanismo() {

  return (
    <>
         <NavMaps/>
      
      <section class="page-section-sub-boxlegend " id="about">
        <Container>
          <Row>
        <MapsItem
        url= "https://map.vm2info.com/parauapebas/1802"
        titulobi="Bairros de Parauapebas"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
          </Row>
        </Container>
      </section>
    
    </>
  );
}
