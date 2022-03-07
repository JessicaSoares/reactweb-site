import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { useState, useEffect } from "react";
import GraphItem from "../GraphItem";
import TextSectionItem from "../TextSectionItem";


export default function Lixo() {

  return (
    <>

    <TextSectionItem
      titlesection = "Coleta de Resíduos Sólidos - Parauapebas e Região"
      textsection = "Resíduos sólidos, segundo a Política Nacional de Resíduos Sólidos, são definidos como sendo todo material, substância, objeto ou bem descartado resultante de atividades humanas em sociedade. O Ofício n° 523/2021 de 12 de maio de 2021, institui a Política Municipal de Gestão Integrada de Resíduos
      Sólidos de Parauapebas, que constitui instrumento da gestão municipal de resíduos sólidos, em consonância com o Plano Nacional de Resíduos Sólidos e o Plano Estadual de Resíduos Sólidos, conforme as diretrizes da Lei Federal n° 12.305, de 02 de agosto de 2010." />
      <section class="page-section-sub-boxlegend " id="about">
        <Container>
          <Row>
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiMTBjM2E5MjItMTgzNy00YTgyLWI1ODktNzlmZmZlMWYzODY3IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Coleta de Residuos Sólidos"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiZmMzZjMxNDctNmNjZC00NTNmLWEwMGMtODM2NDQ1N2IxYTYwIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Comparativo da População Atendida"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        /> 
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiOGY0YzkzNzAtZDk5OS00ZjFmLTg0YTYtMzc1NmE0YTM1NmE1IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Evolução da População Atendida"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />     
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiNTVlYTAzYTktYWE2MC00OGEwLWJlNDYtZTk5NDBjYjQ4YzcxIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Série Histórica de Residuos"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />                      
          </Row>
        </Container>
      </section>
    </>
  );
}
