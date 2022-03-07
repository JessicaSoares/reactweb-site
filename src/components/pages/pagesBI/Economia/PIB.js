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

export default function PIB() {

  return (
    <>
      <NavEconomia/>


      <TextSectionItem
      titlesection = "PIB"
      textsection = "PIB é a soma de todos os bens e serviços finais produzidos por um país, estado ou cidade, geralmente em um ano."
      />
      <section class="page-section-sub-boxlegend " id="about">
        <Container>
          <Row>
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiM2ZhYjM1MzItMGVlNC00NTY0LTgxODMtMzU4MGEwNzgxZWM3IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection5c7c140aa49299d9a545"
        titulobi="PIB - Parauapebas"
        legend = "* Fonte:PIB * <br/>*PIB - Produto Interno Bruto a preços correntes (Mil Reais)."
        mais = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante.asdasdasdasdasdaLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante.asdasdasdasdasdaLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante.asdasdasdasdasda"
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiOWM4MTYzOWMtN2NkZi00MGFkLTg0ODktMDMxNDAyNzAwZGQyIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSectionc82c7bdfe576755b358a"
        titulobi="PIB - Parauapebas e Região"
        legend = "* Fonte:PIB <br/>*PIB - Produto Interno Bruto a preços correntes (Mil Reais)."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiYWE2YjEyNzgtODNmMS00Y2JkLWE0YzgtMjliMzk1MzdhNzM4IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection"
        titulobi="Evolução do Pib (Mil Reais)"
        legend = "* Fonte:PIB <br/>*PIB - Produto Interno Bruto a preços correntes (Mil Reais)."
        />
         <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiMjQ0MWMyMTktZTQ1Ny00MDUxLTk0MmYtOWY5ZDIxYzY2MzIzIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Percentual do PIB de Parauapebas e Microrregião"
        legend = "* Fonte:PIB <br/>*PIB - Produto Interno Bruto a preços correntes (Mil Reais)."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiYWE2YjEyNzgtODNmMS00Y2JkLWE0YzgtMjliMzk1MzdhNzM4IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection"
        titulobi="Valor Adicionado"
        legend = "* Fonte:PIB <br/>*PIB - Produto Interno Bruto a preços correntes (Mil Reais)."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiZmIwNGVmZWUtNTdjOC00YWEyLWE1YTctYzY1M2E3Mzc4MTY5IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection9c4499242c01db74c377"
        titulobi="Percentual por Atividade Econômica"
        legend = "* Fonte:PIB <br/>*PIB - Produto Interno Bruto a preços correntes (Mil Reais)."
        />
          </Row>
         
          
        </Container>
      </section>

    </>
  );
}
