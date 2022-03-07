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
        url= "https://app.powerbi.com/view?r=eyJrIjoiNWNhOTU2YzMtYzNjZS00NjZmLWI2NjctNDhjZjVlZTU0ZjVhIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Quantidade de Alunos e Escolas por Modalidade"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiYTdmYzU2ZmUtYmIxYS00MDdmLWJmNzgtNTU1ZGEyY2ZmYTBjIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection"
        titulobi="Percentual de Docentes por Modalidade"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiMDc2OGQ3NjktM2RiNS00MzY5LWI5ZmUtZTQyZThmZWM2ZmUzIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection8789529805fa745856e2"
        titulobi="Percentual de Docentes por Dependência Administrativa"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiZWU0MWRkNTYtMTE5Yi00NDA2LWI2NzQtODUxYWNjOGRhOTMwIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSectionc82c7bdfe576755b358a"
        titulobi="Índice de Desenvolvimento da Educação Básica de Parauapebas"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiZjcwMTU2OTgtZDc1NC00NjA4LTgzYmUtOTFlMWViZjI1NWU5IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSectione8b4ad7613be3a333204"
        titulobi="Índice de Desenvolvimento da Educação Básica da Microrregião de Parauapebas"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiMzlhYTRhZmMtOGU1MS00M2JlLWIyYmQtMDUxMTI2NzczYzc5IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection8c64ac8101c870e23b35"
        titulobi="Raio X das Escolas"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />               
          </Row>
        </Container>
      </section>
    </>
  );
}