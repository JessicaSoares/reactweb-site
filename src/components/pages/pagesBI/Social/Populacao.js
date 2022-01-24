import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { useState, useEffect } from "react";
import GraphItem from "../GraphItem";
import TextSectionItem from "../TextSectionItem";
import NavSocial from "./NavSocial";

export default function Populacao() {

  return (
    <>
   <NavSocial/>
      
      <TextSectionItem
      titlesection = "Perfil Populacional"
      textsection = "As estimativas da população residente para os 5.568 municípios, mais Distrito Federal e Distrito Estadual de Fernando de Noronha, produzidas pelo IBGE consideram a situação atualizada da Divisão Político‐Administrativa Brasileira – DPA.

      O reprocessamento dos valores das áreas territoriais, de acordo com a estrutura político-administrativa vigente em 30/06/2020 (ver nota abaixo), data de referência das Estimativas Populacionais 2020, incorporaram as atualizações de limites territoriais municipais ocorridas após o Censo Demográfico 2010 e praticadas nas Estimativas Populacionais Anuais no período de 2011 a 2020, bem como demais ajustes territoriais ocorridos neste período, constantes da Malha Municipal Digital produzida anualmente pela Coordenação de Estruturas Territoriais da Diretoria de Geociências do IBGE.
      
      O redimensionamento dos valores de áreas é próprio da evolução das geotecnologias aplicadas no monitoramento da dinâmica da divisão territorial brasileira, que implica na atualização periódica dos valores das áreas estaduais e municipais com a utilização continuada de melhores técnicas e de melhores insumos de produção e também para refletir as eventuais alterações nos limites político-administrativos por justificativas legais ou judiciais.
      
      Para a superfície do Brasil foi calculado o valor de 8.510.345,538 km², publicado no DOU nº 41, de 03/03/2021, conforme Portaria nº 47, de 01 de março de 2021.

      
      NOTA: De acordo com a Resolução nº 17 de maio de 2020, considerando, especialmente, os efeitos da pandemia do Coronavírus (COVID-19), o IBGE resolveu prorrogar de 30/04/2020 para o dia 30 de junho de 2020, o prazo estabelecido no art. 3º da R.PR nº 5/2015 para o recebimento, no IBGE, dos Ofícios provenientes dos órgãos estaduais responsáveis pela divisão político-administrativa, comunicando as atualizações territoriais na sua divisão político-administrativa."
      />
      <section class="page-section-sub-boxlegend " id="about">
        <Container>
          <Row>
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiMTM2M2Y2NGItODZlYi00ZWZlLTllNDktNjc4ZTU3M2Q3ZTViIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Área Territorial"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiZjU2MzhiYjgtNzA5Ny00ODg0LTg5NDctYjdmMzM5ZTIyMTk1IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Número de Eleitores"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiNGNkNWM1NjAtMzMwYy00MzM3LWJjNjEtMDA1NTJjYmM5NTExIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="PIB per Capita"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiMDNiZGQ3ZTctNWVjNS00MTdhLWFhNTAtZTU2MTMzZDMwZGU5IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Estimativa da População"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        
          </Row>
        </Container>
      </section>
    </>
  );
}
