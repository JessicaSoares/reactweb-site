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
      titlesection = "Balança Comercial"
      textsection = "Balança comercial se refere ao conjunto de tudo o que é importado e exportado entre os países, ou seja, a diferença entre os valores das exportações e das importações de um país em um certo período, revelando se a nação é compradora ou vendedora nos mercados mundiais de bens e serviços."
      />
     <section class="page-section-sub-boxlegend " id="about">
        <Container>
       
       <ListarPaineis details={initialDetails} props ="BalancaComercial" />
        </Container>
      </section>

    </>
  );
}
