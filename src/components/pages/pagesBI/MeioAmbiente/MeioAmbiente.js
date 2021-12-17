import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { useState, useEffect } from "react";
import GraphItem from "../GraphItem";
import TextSectionItem from "../TextSectionItem";
import NavMeioAmbiente from "./NavMeioAmbiente";

export default function MeioAmbiente() {

  return (
    <>
      <NavMeioAmbiente/>
      
      <TextSectionItem
      titlesection = "Queimadas"
      textsection = "Há pelo menos duas décadas a Embrapa – Empresa Brasileira de Pesquisa Agropecuária em parceria com outros órgãos governamentais, monitora por meio de imagens de satélite a ocorrência de queimadas em áreas rurais e de vegetação nativa no Brasil. Dados divulgados pela empresa dão conta de um aumento expressivo destas ocorrências nos últimos anos em todo o país."
      />
      <section class="page-section-sub-boxlegend " id="about">
        <Container>
          <Row>
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiNmIyZDMzZGUtYTU1Ni00ZjM0LTgxMzEtYWVjMDMwMWNlODdiIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Hora da Ocorrência"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiNTYyMjBhOTItZTNjNi00ZDg0LTk3MmQtZDljOGQxMzFmNjgzIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Duração de Queimadas"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiOWVlNDk4NWItZDQxZC00YTIxLWI0ZDktNmZhNjhiMTE0Nzk5IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Indicador de Queimadas por Bairro"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiNzQ5OGYwNTYtMmFkYi00M2FlLTk5NzUtY2Q3MGY2N2YzY2NiIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Indicador de Queimadas por Municipio"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
         <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiMDk4YWU0M2MtYjhlYS00YmYyLWE1MDItN2MxYzkwNTY5NjhjIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Indicador de Queimadas por Chamado ao Mês"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
         <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiYzFjODcyNDctOTc5Yy00MDI2LWE3NjctOTEzZmE3M2U0YTg5IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Indicador de Queimadas por Zona"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiOWI3YzYxMmItYzk0Mi00ZDNiLThjMGItYjFiOTFjM2YwYjFmIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Quantidade de Focos de Queimadas por Natureza"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        
          </Row>
        </Container>
      </section>
    </>
  );
}
