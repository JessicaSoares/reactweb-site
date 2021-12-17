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
      titlesection = "Agricultura Familiar"
      textsection = "  Agricultura familiar é toda forma de cultivo de terra que é administrada por uma família e emprega como mão de obra os membros da mesma. A produção de alimentos acontece em pequenas propriedades de terra e se destina a subsistência do produtor rural e ao mercado interno do país.A agricultura familiar é a responsável pela maior parcela dos empregos gerados no campo e representa a maior parte das propriedades agropecuárias brasileiras. 
      Esse segmento caracteriza-se pela produção de uma grande variedade de alimentos, com destaque para culturas como café, feijão, mandioca, banana e abacaxi."
      />
      <section class="page-section-sub-boxlegend " id="about">
        <Container>
          <Row>
          <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiZDkyMzAzYjMtNzQzNC00YTUxLWI4N2EtZDU4MTBhODZmZjE2IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Quantidade de Familias Atendidas"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiZTBiZGZkY2MtNTk1ZC00ZWU5LWEyOGMtMTczMDA2YmEzOWMwIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Percentual dos Chefes de Família por Faixa Étaria"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiN2FkYjkyNTYtOGJhNy00ODY0LTk3ZjAtNWZjOWNmNWMwMDgxIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Total de Chefes de Família por Escolaridade"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiMjk3MzM2NDAtNjZiOS00ZTU4LTljM2ItYTJjMDg5ZjYxZmFhIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Total de Chefes de Unidade Familiar  Por Sexo"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiMjZmZTE0NTMtMTU0Mi00YTRmLTlhOGEtZWFhMTQ5OTdmZjY5IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Percentual de Chefes de Família por Tipo"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        
         <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiYTM1YzEwODUtYzcxYS00Y2FhLWFmZjItNGZjZGI2YzhiZTAxIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection"
        titulobi="Vendas Por Produto"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiYTBjZTg0NWItYWUzYi00NWIwLWE4NDAtZjlhOGY1YTk0NjY4IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Ranking Por Produto"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiNjFiMDVlMWYtY2UwOS00NTMwLWIyNjYtMDkyYTE0YzNhOWQzIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Produtos mais Comercializados por Categoria"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiOTMzYjMxNGItMGM4My00ZTViLWI2ZTMtNzM5ZDExNDBlYmQ4IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection"
        titulobi="Produtos por Tipo de Beneficiamento"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
       <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiMmFmNGZhOGEtNWJmZS00NzViLTk2NDgtYTUyNjEzMjNmY2NjIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Produtos por Tipo de Origem"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />

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
        
          </Row>
        </Container>
      </section>
    </>
  );
}
