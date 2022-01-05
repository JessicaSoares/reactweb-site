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
      titlesection = "Produção Agricultura Municipal - PAM"
      textsection = "A Produção Agrícola Municipal - PAM teve início no Ministério da Agricultura em 1938. Suas informações eram levantadas pela Rede de Coleta do IBGE, cabendo ao Ministério a elaboração dos questionários, a apuração, a crítica e a divulgação dos resultados. Com a publicação do Decreto n. 73.482, de 17.01.1974, o Instituto tornou-se responsável por todas as fases da pesquisa a partir daquela data, bem como pelos demais inquéritos estatísticos relacionados ao setor agropecuário. As estatísticas relativas aos anos de 1971 e 1972, porém, não estão disponíveis por não terem sido divulgadas pelo Ministério.

      A pesquisa fornece informações sobre área plantada, área destinada à colheita, área colhida, quantidade produzida, rendimento médio e preço médio pago ao produtor, no ano de referência, para 64 produtos agrícolas (31 de culturas temporárias e 33 de culturas permanentes). As culturas temporárias, cabe destacar, são as de curta ou média duração, uma vez que seu ciclo reprodutivo é inferior a um ano, e, depois de colhidas, precisam de um novo plantio. As culturas permanentes, por outro lado, são as de ciclo longo, cujas colheitas podem ser feitas por vários anos sem a necessidade de novo plantio."
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
