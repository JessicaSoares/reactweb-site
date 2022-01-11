import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { useState, useEffect } from "react";
import GraphItem from "../GraphItem";
import TextSectionItem from "../TextSectionItem";
import NavEconomia from "./NavEconomia";
import Footer from '../../../Footer';

export default function Receitas() {

  return (
    <>
      <NavEconomia/>
      
      <TextSectionItem
      titlesection = "Receitas"
      textsection = "Receita é o direito que uma organização possui de receber um determinado montante, no imediato ou em um momento futuro. Resulta, por exemplo, de operações de venda de bens e de prestação de serviços."
      />
      <section class="page-section-sub-boxlegend " id="about">
        <Container>
          <Row>
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiNzZkMjUxMmEtZDhjMy00NmQ4LTg5ZTgtNDc3OTRlZjRlY2YwIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection"
        titulobi="Receita Arrecardada"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiYjZiMmIxMmQtZDRjYi00NjUxLTg4MzEtNmMzMjM5MzZlNzQxIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Rank por Especificação"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiYjEwOTMwOTAtY2QxMi00MjAzLWJiNzAtMTZiMGYyYWZiNzM2IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection"
        titulobi="Comparativo da Arrecadação por Mês e Ano"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiYWU4OWQzM2MtMjFmMS00NzJmLWJhY2YtZDY3MjIyYmI3M2YyIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection03b074699b43695ca0a7"
        titulobi="Comparativo Receita Prevista x Receita Arrecadada"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
          </Row>
        </Container>
      </section>
      < Footer />
    </>
  );
}
