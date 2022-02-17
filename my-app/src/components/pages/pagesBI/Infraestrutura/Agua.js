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
      titlesection = "Abastecimento de Água"
      textsection = "Um sistema de abastecimento de água consiste no conjunto de obras, equipamentos e serviços com o objetivo de levar água potável para uso no consumo doméstico, indústria, serviço público, entre outros."
      />
      <section class="page-section-sub-boxlegend " id="about">
        <Container>
          <Row>
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiNzU2YThiZWEtN2UwMS00ZWQzLWEwNjYtYzRjZTQ2ODI4Y2E1IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Abastecimento de Água de Parauapebas"
        legend = ""
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiNDBjODU4MjYtNmU4OC00ZDU2LWIzZTQtZDAwNGIzOWRkNzNlIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection6a19156f389c7f923d78"
        titulobi="Comparativo - Água Consumida X  Água Tratada"
        legend = "*Fonte:SINIS **Volume Tratada ETA é expresso em litros (L) *** Volume Consumido é expresso em litros (L)."
        />       
         <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiMWRjYzRmODQtODJhZS00NjMyLWEyN2MtMzBlYTIyMjQ4NmJjIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection6a19156f389c7f923d78"
        titulobi="Evolução da População Atendida"
        legend = "*Fonte:SINIS **Volume Tratada ETA é expresso em litros (L) *** Volume Consumido é expresso em litros (L)."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiNTVkZGUyOGQtYmQ4Yy00YTc0LWI1MGMtODFlZTIxZWQ5NTZiIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection6a19156f389c7f923d78"
        titulobi="Evolução da População Urbana e Rural Atendida"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiMTVkOTA5ZTgtYWQzMi00NmExLWI0ZDMtZDlkOTA5OTUzMWU2IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection550825650624ca04523d"
        titulobi="Comparativo de População Atendida por Município"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiZTlmNjgxNzktNDEwMy00ZDA5LWI1ZDgtMTk3MTU5ZGRiZmQ2IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection550825650624ca04523d"
        titulobi="Tabela Abastecimento de Água por Município"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
          </Row>
        </Container>
      </section>
     
    </>
  );
}
