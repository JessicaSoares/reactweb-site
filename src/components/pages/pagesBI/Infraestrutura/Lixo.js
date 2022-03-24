import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { useState, useEffect } from "react";
import GraphItem from "../GraphItem";
import TextSectionItem from "../TextSectionItem";
import ListarPaineis from '../../../ListarPaineis';
import initialDetails from '../../../data/initialDetails';

export default function Lixo() {

  return (
    <>

    <TextSectionItem
      titlesection = "Coleta de Resíduos Sólidos - Parauapebas e Região"
      textsection = "Resíduos sólidos, segundo a Política Nacional de Resíduos Sólidos, são definidos como sendo todo material, substância, objeto ou bem descartado resultante de atividades humanas em sociedade. O Ofício n° 523/2021 de 12 de maio de 2021, institui a Política Municipal de Gestão Integrada de Resíduos Sólidos de Parauapebas, que constitui instrumento da gestão municipal de resíduos sólidos, em consonância com o Plano Nacional de Resíduos Sólidos e o Plano Estadual de Resíduos Sólidos, conforme as diretrizes da Lei Federal n° 12.305, de 02 de agosto de 2010." />
        <section class="page-section-sub-boxlegend " id="about">
        <Container>
       
       <ListarPaineis details={initialDetails} props ="Lixo" />
        </Container>
      </section>
    </>
  );
}