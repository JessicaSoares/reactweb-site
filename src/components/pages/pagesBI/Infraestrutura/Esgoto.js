import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { useState, useEffect } from "react";
import GraphItem from "../GraphItem";
import TextSectionItem from "../TextSectionItem";
import NavInfraestrutura from "./NavInfraestrutura";
import Footer from '../../../Footer';
import ListarPaineis from '../../../ListarPaineis';
import initialDetails from '../../../data/initialDetails';
export default function Esgoto() {

  return (
    <>
      <NavInfraestrutura/>
      
      <TextSectionItem
      titlesection = "Esgoto"
          textsection = "Esgoto é um sistema destinado a escoar e tratar os dejetos dos diversos aglomerados populacionais. Esses dejetos são a água proveniente do banho, limpeza de roupas, louças ou descarga do vaso sanitário. O Serviço Autônomo de Água e Esgoto de Parauapebas – SAAEP, fundado em 2009, após a criação da Lei n° 4.385, com o objetivo de desenvolver os serviços de saneamento na cidade de Parauapebas. É uma autarquia da administração indireta da Prefeitura Municipal de Parauapebas, cujo objetivo é promover os serviços de captação, tratamento e distribuição de água potável para a população do município. Os dados dos gráficos a seguir foram coletados da fonte SNIS, alimentados pelo SAAEP."
      />
          <section class="page-section-sub-boxlegend " id="about">
        <Container>
       
       <ListarPaineis details={initialDetails} props ="Esgoto" />
        </Container>
      </section>
  
    </>
  );
}
