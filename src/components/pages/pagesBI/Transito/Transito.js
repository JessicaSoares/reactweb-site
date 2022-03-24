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
      textsection = "teste2"
      />

   
      <section class="page-section-sub-boxlegend " id="about">
        <Container>
       
       <ListarPaineis details={initialDetails} props ="Transito" />
        </Container>
      </section>
    </>
  );
}
