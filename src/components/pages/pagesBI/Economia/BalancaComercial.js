import "../graphs.css";
import { Link } from "react-router-dom";
import Iframe from "react-iframe";
import NavbarSub from "../NavbarSub";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { AiOutlineCloudDownload } from "react-icons/ai";
import GraphItem from "../GraphItem";
import TextSectionItem from "../TextSectionItem";
import NavEconomia from "./NavEconomia";
import Footer from '../../../Footer';

export default function Graphs() {

  return (
    <>
      <NavEconomia/>
      
      <TextSectionItem
      titlesection = "Balança Comercial"
      textsection = "Balança comercial se refere ao conjunto de tudo o que é importado e exportado entre os países, ou seja, a diferença entre os valores das exportações e das importações de um país em um certo período, revelando se a nação é compradora ou vendedora nos mercados mundiais de bens e serviços."
      />
      <section class="page-section-sub-boxlegend " id="about">
        <Container>
          <Row>
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiOTUyMGY3MTktMDJmNy00OWEzLTg3MDAtNzJiOWIyMzYzNmM3IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection2c7c5e5816bb2d077335"
        titulobi="Balança Comercial"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiMjMyMzZiZGEtNDJiOC00ZjY3LWExMjQtNDAxNWZlOTJlODFkIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection2c7c5e5816bb2d077335"
        titulobi="Superávit por Município - Região de Parauapebas"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiNmFjNjFlOWItOGUyOC00MDI5LTg5NjEtZDk3NWU0MWVmYTQxIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection2c7c5e5816bb2d077335"
        titulobi="Evolução do Comércio Exterior"
        legend = "Evolução das Exportação por Produto Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiNWFjNDFmM2UtZjY3Yy00NGU3LTgyNTgtYTIyNWJiYTZlNjZhIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection1692d67cbce098e10087"
        titulobi="Evolução das Exportações por Produto"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiN2MwZWZmMjYtM2NjNy00MjhlLWFkMTctZjc1YjU2NWEzOTUzIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection"
        titulobi="Evolução das Importações por Produto"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
          </Row>
        </Container>
      </section>
      < Footer />
    </>
  );
}
