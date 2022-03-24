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
export default function Iluminacao() {

  return (
    <>
      <NavInfraestrutura/>
      
      <TextSectionItem
      titlesection = "Iluminação"
      textsection = "Iluminação pública é o sistema de iluminação noturna das cidades, essencial à qualidade de vida nos centros urbanos, atuando como instrumento de cidadania, permitindo aos habitantes desfrutar, plenamente, do espaço público no período noturno."
      />
     <section class="page-section-sub-boxlegend " id="about">
        <Container>
       
       <ListarPaineis details={initialDetails} props ="Iluminacao" />
        </Container>
      </section>

    </>
  );
}
