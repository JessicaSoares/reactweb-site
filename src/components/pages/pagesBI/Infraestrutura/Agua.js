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
       
       <ListarPaineis details={initialDetails} props ="Agua" />
        </Container>
      </section>
     
    </>
  );
}
