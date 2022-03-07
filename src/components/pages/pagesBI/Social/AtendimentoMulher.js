import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { useState, useEffect } from "react";
import GraphItem from "../GraphItem";
import TextSectionItem from "../TextSectionItem";
import NavSocial from "./NavSocial";

export default function Educacao() {

  return (
    <>
   <NavSocial/>
      
      <TextSectionItem
      titlesection = "Educação Municipal de Parauapebas"
      textsection = "O sistema educativo é o conjunto de meios pelo qual se concretiza o direito à educação. O sistema educativo desenvolve-se através de um conjunto organizado de estruturas e de ações diversificadas, por iniciativa e sob a responsabilidade de diferentes instituições e entidades, públicas e privadas. Os dados dos gráficos abaixo foram coletados da FONTE: INEP e SEMED"
      />
      <section class="page-section-sub-boxlegend " id="about">
        <Container>
          <Row>
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiZTJlY2IyYWUtNDk0NS00N2EzLWFjMGUtOTNlZmM1MzdiMjE0IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection8c64ac8101c870e23b35"
        titulobi="Quantidade de Alunos e Escolas da Rede Municipal de Ensino"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
                <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiZTJlY2IyYWUtNDk0NS00N2EzLWFjMGUtOTNlZmM1MzdiMjE0IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection8c64ac8101c870e23b35"
        titulobi="Quantidade de Alunos e Escolas da Rede Municipal de Ensino"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
                <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiZTJlY2IyYWUtNDk0NS00N2EzLWFjMGUtOTNlZmM1MzdiMjE0IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection8c64ac8101c870e23b35"
        titulobi="Quantidade de Alunos e Escolas da Rede Municipal de Ensino"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
            
          </Row>
        </Container>
      </section>
    </>
  );
}