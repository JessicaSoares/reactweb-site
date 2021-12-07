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

export default function Graphs() {

  return (
    <>
      <NavEconomia/>
      
      <TextSectionItem
      titlesection = "Comércio exteriorr"
      textsection = "Comércio exterior é o conjunto das compras e vendas de bens e serviços feitos entre países. Quando um país vende um bem ou serviço a outro, a operação é chamada de exportação. Quando compra de outro país, efetua realiza uma importação "
      />
      <section class="page-section-sub-boxlegend " id="about">
        <Container>
          <Row>
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiOTUyMGY3MTktMDJmNy00OWEzLTg3MDAtNzJiOWIyMzYzNmM3IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Balança Comercial"
        legend = "Balança Comercial é a união das contas importação e exportação do país, sendo um importante indicador econômico que representa muito sobre a situação da região analisada."
        />
                <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiMjMyMzZiZGEtNDJiOC00ZjY3LWExMjQtNDAxNWZlOTJlODFkIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection2c7c5e5816bb2d077335"
        titulobi="Superávit por Município - Parauapebas e Região"
        legend = "Superávit, é o termo usado na Economia para se referir ao valor médio que sobra de uma receita (dinheiro arrecadado) após a dedução dos gastos."
        />
                <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiNmFjNjFlOWItOGUyOC00MDI5LTg5NjEtZDk3NWU0MWVmYTQxIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Evolução do Comércio Exterior - Parauapebas e Região"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />

<GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiNWFjNDFmM2UtZjY3Yy00NGU3LTgyNTgtYTIyNWJiYTZlNjZhIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Evolução das Exportação por Produto - Parauapebas e Região"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />

<GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiNmFjNjFlOWItOGUyOC00MDI5LTg5NjEtZDk3NWU0MWVmYTQxIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Evolução das Importações por Produto - Parauapebas e Região"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
          </Row>
        </Container>
      </section>
    </>
  );
}
