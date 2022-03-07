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
      textsection = "Um sistema de abastecimento de água consiste no conjunto de obras, equipamentos e serviços com o objetivo de levar água potável para uso no consumo doméstico, indústria, serviço público, entre outros. O SAAEP – Serviço Autônomo de Água e Esgoto de Parauapebas foi fundado em 2009, após a criação da Lei n° 4.385, de 11 de agosto de 2009, com o objetivo de desenvolver os serviços de saneamento na cidade de Parauapebas. É uma autarquia da administração indireta da Prefeitura Municipal de Parauapebas, cujo objetivo é promover os serviços de captação, tratamento e distribuição de água potável para a população do município. Os dados coletados para construção dos gráficos que serão apresentados á seguir, têm origem do Sistema Nacional de Informações sobre Saneamento - SNIS, uma unidade vinculada à Secretaria Nacional de Saneamento do Ministério do Desenvolvimento Regional e alimentado pela SAAEP."
      />
      <section class="page-section-sub-boxlegend " id="about">
        <Container>
          <Row>
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiNzU2YThiZWEtN2UwMS00ZWQzLWEwNjYtYzRjZTQ2ODI4Y2E1IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Abastecimento de Água de Parauapebas"
        legend = "* Fonte:SNIS <br/> * Volume Tratada ETA é expresso em metros cúbicos(m³) <br/>* Volume Consumido é expresso em metros cúbicos (m³). <br/>* 1 m³= 1000 L"
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiNDBjODU4MjYtNmU4OC00ZDU2LWIzZTQtZDAwNGIzOWRkNzNlIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection6a19156f389c7f923d78"
        titulobi="Comparativo - Água Consumida X  Água Tratada de Parauapebas"
        legend = "* Fonte:SNIS <br/> * Volume Tratada ETA é expresso em metros cúbicos(m³) <br/>* Volume Consumido é expresso em metros cúbicos (m³). <br/>* 1 m³= 1000 L"
        />       
         <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiMWRjYzRmODQtODJhZS00NjMyLWEyN2MtMzBlYTIyMjQ4NmJjIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection6a19156f389c7f923d78"
        titulobi="Evolução da População Atendida de Parauapebas"
        legend = "* Fonte:SNIS"
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiNTVkZGUyOGQtYmQ4Yy00YTc0LWI1MGMtODFlZTIxZWQ5NTZiIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection6a19156f389c7f923d78"
        titulobi="Evolução da População Urbana e Rural Atendida de Parauapebas"
        legend = "* Fonte:SNIS"
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiMTVkOTA5ZTgtYWQzMi00NmExLWI0ZDMtZDlkOTA5OTUzMWU2IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection550825650624ca04523d"
        titulobi="Comparativo de População Atendida por Município"
        legend = "* Fonte:SNIS"
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiZTlmNjgxNzktNDEwMy00ZDA5LWI1ZDgtMTk3MTU5ZGRiZmQ2IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection550825650624ca04523d"
        titulobi="Tabela Abastecimento de Água por Município"
        legend = "* Fonte:SNIS <br/> * Volume Tratada ETA é expresso em metros cúbicos(m³) <br/>* Volume Consumido é expresso em metros cúbicos (m³). <br/>* 1 m³= 1000 L"
        />
          </Row>
        </Container>
      </section>
     
    </>
  );
}
