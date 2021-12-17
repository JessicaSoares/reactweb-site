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
import NavAgronegocio from "./NavAgronegocio";

export default function Graphs() {

  return (
    <>
      <NavAgronegocio/>
      
      <TextSectionItem
      titlesection = "Produção Pecuária Municipal"
      textsection = "A pecuária é uma atividade econômica pertencente ao setor primário que diz respeito à criação de animais para a comercialização direta, para o fornecimento de matérias-primas empregadas em outros setores produtivos (como couros, lãs e peles) e, principalmente, para a produção de alimentos como carnes, leites, ovos e mel."
      />
      <section class="page-section-sub-boxlegend " id="about">
        <Container>
          <Row>
          <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiMDI0ZDY1NTgtMmEzMC00MzMyLTgxMGEtNWYyZjE5ZjFhMzM2IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi=" Rebanho Bovino"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiNTA0YzJmYjgtMmIzMS00MGNlLTljNmUtNDMwZjgxMWMxNWI3IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi=" Total de Cabeça por Faixa Etária - Bovino"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiOWE4ZTA0NmYtNTg1My00ZmU1LTgwYzEtMmIxY2VlY2ViYmI4IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi=" Avicultura "
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiMWRjMTAzYTEtZjI1Ni00ODNmLTk2ZjQtNzQ5OTg1YzQzMTk4IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Percentual de Aves Por Finalidade "
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
       <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiMTJiZWE3OWMtODBiMC00ODYwLWJkY2UtM2FlYzI0MmUzMjIwIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Produtos mais Produzidos no Município"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
          </Row>
        </Container>
      </section>
    </>
  );
}
