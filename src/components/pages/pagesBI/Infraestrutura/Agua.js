import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { useState, useEffect } from "react";
import GraphItem from "../GraphItem";
import TextSectionItem from "../TextSectionItem";
import NavInfraestrutura from "./NavInfraestrutura";
import Footer from '../../../Footer';

export default function Agua() {

  return (
    <>
      <NavInfraestrutura/>
      
      <TextSectionItem
      titlesection = "teste2"
      textsection = "teste2"
      />
      <section class="page-section-sub-boxlegend " id="about">
        <Container>
          <Row>
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiOWI4ZjgyM2MtMTJjNC00YWM1LWExZmYtMjZlODVjOGYyZTQxIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="sdsdsdsd"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiOWI4ZjgyM2MtMTJjNC00YWM1LWExZmYtMjZlODVjOGYyZTQxIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="sdsdsdsd"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiOWI4ZjgyM2MtMTJjNC00YWM1LWExZmYtMjZlODVjOGYyZTQxIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="sdsdsdsd"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
          </Row>
        </Container>
      </section>
      < Footer />
    </>
  );
}
