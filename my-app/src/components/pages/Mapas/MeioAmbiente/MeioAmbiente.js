import "../../pagesBI/graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../../pagesBI/BoxLegend.css";
import React, { useState, useEffect } from "react";
import GraphItem from "../../pagesBI/GraphItem";
import TextSectionItem from "../../pagesBI/TextSectionItem";
import NavMaps from '../NavMaps'
import Footer from '../../../Footer';

export default function Infraestrutura() {

  return (
    <>
   <NavMaps/>
      

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

    </>
  );
}
