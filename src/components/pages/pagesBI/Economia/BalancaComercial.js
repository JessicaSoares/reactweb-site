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

export default function Graphs() {

  return (
    <>
      <NavEconomia/>
      
      <TextSectionItem
      titlesection = "Balança Comercial"
      textsection = "Balança comercial é a união das contas importação e exportação do país sendo um importante indicador econômico que representa muito sobre a situação da região analisada, esse indicador é tão importante quanto o PIB."
      />
      <section class="page-section-sub-boxlegend " id="about">
        <Container>
          <Row>
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiOTUyMGY3MTktMDJmNy00OWEzLTg3MDAtNzJiOWIyMzYzNmM3IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection2c7c5e5816bb2d077335"
        titulobi="Balança Comercial por Município"
        legend = "* Fonte: MDIC-COMEX <br/> *O saldo da balança comercial resulta da diferença entre as exportações e importações. O  saldo da Balança Comercial é considerado positivo quando há valores das exportações maiores que o das importações, havendo assim um superávit.Quando esse valor é negativo, ou seja, quando os valores das importações são maiores que os das exportações, falamos que ocorre um déficit."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiMjMyMzZiZGEtNDJiOC00ZjY3LWExMjQtNDAxNWZlOTJlODFkIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection2c7c5e5816bb2d077335"
        titulobi="Superávit por Município"
        legend = "* Fonte: MDIC-COMEX <br/>*Superávit ou superavit consiste no resultado positivo a partir da diferença entre exportação e a importação."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiNmFjNjFlOWItOGUyOC00MDI5LTg5NjEtZDk3NWU0MWVmYTQxIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection2c7c5e5816bb2d077335"
        titulobi="Evolução da Balança Comercial por Município"
        legend = "* Fonte: MDIC-COMEX <br/> *O saldo da balança comercial resulta da diferença entre as exportações e importações. O  saldo da Balança Comercial é considerado positivo quando há valores das exportações maiores que o das importações, havendo assim um superávit.Quando esse valor é negativo, ou seja, quando os valores das importações são maiores que os das exportações, falamos que ocorre um déficit."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiNWFjNDFmM2UtZjY3Yy00NGU3LTgyNTgtYTIyNWJiYTZlNjZhIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection1692d67cbce098e10087"
        titulobi="Evolução das Exportações dos Produtos por Município"
        legend = "* Fonte: MDIC-COMEX <br/> * Exportação refere-se ao tráfego de mercadoria e serviço que sai de um  país com destino a outro."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiN2MwZWZmMjYtM2NjNy00MjhlLWFkMTctZjc1YjU2NWEzOTUzIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection"
        titulobi="Evolução das Importações dos Produtos por Município"
        legend = "* Fonte: MDIC-COMEX <br/> * Importação é o processo comercial e fiscal que consiste em trazer um bem, que pode ser um produto ou um serviço, do exterior para o país de referência."
        />
          </Row>
        </Container>
      </section>

    </>
  );
}
