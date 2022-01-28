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
      titlesection = "Produção Agrícola Municipal"
      textsection = " A Produção Agrícola Municipal é um conjunto de produtos das lavouras temporárias e permanentes do município que se caracterizam não só pela grande importância econômica que possuem na pauta de exportações, como também por sua relevância social, componentes que são da cesta básica do cidadão. Os dados dos gráficos a seguir foram coletados da FONTE: IBGE-PAM."
      />    
      <section class="page-section-sub-boxlegend " id="about">
        <Container>
          <Row>
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiMDUzOGJlMjMtZGNkZS00MzcxLTkwZTYtYzI2NzY2YWEwYWQzIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Produtos mais Produzidos no Município"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiNTViZjU0NDgtNzg2YS00OTU1LTgyY2UtYTE3OTVjZjA3Y2E5IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Evolução da Produção Municipal"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiMWFjOTM4ZWMtN2MxNS00YjE0LTk4YWMtOWUyZjE5YzUwYjNlIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Área Colhida (Héctares) X Área Plantada (Héctares)"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiZTUzNzc0ODItYWUzYi00NGJkLTg3MTgtOTA3MGY0ZDMyMDIxIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Ranking dos Produtos mais Produzidos por Municipio"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        
          </Row>
        </Container>
      </section>
    </>
  );
}
