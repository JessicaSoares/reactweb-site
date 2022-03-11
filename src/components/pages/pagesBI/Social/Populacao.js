import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { useState, useEffect } from "react";
import GraphItem from "../GraphItem";
import TextSectionItem from "../TextSectionItem";
import NavSocial from "./NavSocial";

export default function Populacao() {

  return (
    <>
   <NavSocial/>
      
      <TextSectionItem
      titlesection = "Perfil Populacional"
      textsection = "As estimativas da população residente para os 5.568 municípios, mais Distrito Federal e Distrito Estadual de Fernando de Noronha, produzidas pelo IBGE consideram a situação atualizada da Divisão Político‐Administrativa Brasileira. O reprocessamento dos valores das áreas territoriais, de acordo com a estrutura político-administrativa vigente em 30/06/2020, data de referência das Estimativas Populacionais 2020, incorporaram as atualizações de limites territoriais municipais ocorridas após o Censo Demográfico 2010 e praticadas nas Estimativas Populacionais Anuais no período de 2011 a 2020, bem como demais ajustes territoriais ocorridos neste período, constantes da Malha Municipal Digital produzida anualmente pela Coordenação de Estruturas Territoriais da Diretoria de Geociências do IBGE."/>
      <section class="page-section-sub-boxlegend " id="about">
        <Container>
          <Row>       
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiZjU2MzhiYjgtNzA5Ny00ODg0LTg5NDctYjdmMzM5ZTIyMTk1IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Número de Eleitores"
        legend = "Fonte:TSE"
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiNGNkNWM1NjAtMzMwYy00MzM3LWJjNjEtMDA1NTJjYmM5NTExIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="PIB per Capita"
        legend = "Fonte:IBGE"
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiMDNiZGQ3ZTctNWVjNS00MTdhLWFhNTAtZTU2MTMzZDMwZGU5IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Estimativa da População"
        legend = "Fonte:IBGE"
        />
         <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiMTM2M2Y2NGItODZlYi00ZWZlLTllNDktNjc4ZTU3M2Q3ZTViIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Área Territorial"
        legend = "Fonte:IBGE"
        />
        
          </Row>
        </Container>
      </section>
    </>
  );
}
