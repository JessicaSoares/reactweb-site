import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { useState, useEffect } from "react";
import GraphItem from "../GraphItem";
import TextSectionItem from "../TextSectionItem";
import NavEconomia from "./NavEconomia";
import Footer from '../../../Footer';
import ListarPaineis from '../../../ListarPaineis';
import initialDetails from '../../../data/initialDetails';
export default function Receitas() {

  return (
    <>
      <NavEconomia/>
      
      <TextSectionItem
      titlesection = "Receitas"
      textsection = "Receita é um termo utilizado pela contabilidade para evidenciar a variação positiva da situação líquida patrimonial resultante do aumento de ativos ou da redução de passivos de uma entidade. A receita pública consiste em todos os ingressos disponíveis para cobertura das despesas públicas, em qualquer esfera governamental. Os dados dos gráficos abaixo fora coletados da fonte: ASPEC - Prefeitura Municipal de Prauapebas."
      />
          <section class="page-section-sub-boxlegend " id="about">
        <Container>
       
       <ListarPaineis details={initialDetails} props ="Receitas" />
        </Container>
      </section>

    </>
  );
}
