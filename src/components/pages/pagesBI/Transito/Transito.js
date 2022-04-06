import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { useState, useEffect } from "react";
import GraphItem from "../GraphItem";
import TextSectionItem from "../TextSectionItem";
import NavTransito from "./NavTransito";
import Footer from '../../../Footer';
import ModalDownload from '../ModalDownload'
import ListarPaineis from '../../../ListarPaineis';
import initialDetails from '../../../data/initialDetails';

export default function Transito() {

  return (
    <>
   <NavTransito/>
      
      <TextSectionItem
      titlesection = "Trânsito"
      textsection = "A divulgação do Relatório Global do Estado da Segurança Viária pela Organização Mundial da Saúde (OMS), em 2015, que 1,25 milhão de pessoas morrem anualmente e cerca de 20 a 50 milhões de pessoas sofrem graves lesões devido a acidentes de trânsito em todo o mundo, desde 2007, traz à tona uma preocupação da sociedade e, principalmente, dos governantes para o tema da segurança viária e suas consequências, uma vez que é a principal causa de morte entre jovens de 15 a 29 anos, superando causas como homicídios, doenças do coração e cerebrovasculares. (WORLD HEALTH ORGANIZATION, 2011, 2015)."
      />

   
      <section class="page-section-sub-boxlegend " id="about">
        <Container>
       
       <ListarPaineis details={initialDetails} props ="Transito" />
        </Container>
      </section>
    </>
  );
}
