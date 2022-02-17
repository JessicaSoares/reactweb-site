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
        url= "https://app.powerbi.com/view?r=eyJrIjoiMTJiZWE3OWMtODBiMC00ODYwLWJkY2UtM2FlYzI0MmUzMjIwIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Quantidade Produzida - Rebanho"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiNDhkYTUzNWItZTQ3Ni00YzA3LTllNmItMTgxNzU1ZGNhNmUwIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Percentual Produzido - Rebanho"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiZDc4NTYxNmQtYjIyZS00YTE0LWFiODAtMDE3MTc2ZmI0ZWUzIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Série Histórica - Rebanho"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiMzcyNWYwYzItOGVkMy00MTY3LWJkMDMtMzEyZDlkMWMyYTA3IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Ranking de Rebanho por Municipio"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
         <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiNWMzZTRhMGYtZmU1My00Y2JjLWFlNWYtODI3NTIwNWIzNWUzIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Quantidade Produzida - Animal"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />        
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiNGIxNzhkZTYtNWEyMC00NjBhLTg4NjItZDM4OWQ3ODkzNjM0IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Percentual Produzido - Animal"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiMjQyOWY0ZmQtZDZjZS00MjY0LTg1NzAtN2M4NjY4NTUzMTNjIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Série Histórica - Produção Animal"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />         
         <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiZjRiYjVlZjQtMTgxOS00ZWEyLWE0NjQtYTcyMDM4MjQyMzdkIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Ranking de Produção Animal por Municipio"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
         
          
          </Row>
        </Container>
      </section>
    </>
  );
}
