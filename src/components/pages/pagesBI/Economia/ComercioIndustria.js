import "../graphs.css";
import { Link } from "react-router-dom";
import Iframe from "react-iframe";
import NavbarSub from "../NavbarSub";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { AiOutlineCloudDownload } from "react-icons/ai";
import GraphItem from "../GraphItem";
import TextSectionItem from "../TextSectionItem";
import NavEconomia from "./NavEconomia";
import Footer from '../../../Footer';
import ListarPaineis from '../../../ListarPaineis';
import initialDetails from '../../../data/initialDetails';
export default function Graphs() {

  return (
    <>
      <NavEconomia/>
      
      <TextSectionItem
      titlesection = "Comércio e Indústria"
      textsection = " Comércio e Indústria é toda atividade humana que através do trabalho transforma matéria prima em produtos manufaturados que podem ou não ser comercializados."
      />
         <section class="page-section-sub-boxlegend " id="about">
        <Container>
       
       <ListarPaineis details={initialDetails} props ="ComercioIndustria" />
        </Container>
      </section>
    
    </>
  );
}
