import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { useState, useEffect } from "react";
import GraphItem from "../GraphItem";
import TextSectionItem from "../TextSectionItem";
import NavSocial from "./NavSocial";
import ListarPaineis from '../../../ListarPaineis';
import initialDetails from '../../../data/initialDetails';
export default function Saude() {

  return (
    <>
   <NavSocial/>
      
      <TextSectionItem
      titlesection = "Saúde"
      textsection = "Atualmente é considerada Saúde Pública todo o conjunto de medidas executadas pelo Estado para garantir o bem-estar físico, mental e social da população.

      Em nível internacional, a saúde pública é coordenada pela Organização Mundial de Saúde – OMS, composta atualmente por 194 países. O órgão consiste em uma agência especializada da ONU (Organização das Nações Unidas) que trabalha lado a lado com o governo dos países para aprimorar a prevenção e o tratamento de doenças, além de melhorar a qualidade do ar, da água e da comida.
      
      Além do contexto político-administrativo, a saúde pública também é o ramo da ciência que busca prevenir e tratar doenças através da análise de indicadores de saúde e sua aplicação nos campos da biologia, epidemiologia e outros campos relacionados.
      No Brasil, a saúde pública está prevista na Constituição Federal como um dever do Estado (artigo 196) e como um direito social (artigo 6º), ou seja, um direito que deve ser garantido de forma homogênea aos indivíduos a fim de assegurar o exercício de direitos fundamentais.

Com o objetivo de garantir esse direito, a Constituição Federal atribuiu à União, aos Estados, ao Distrito Federal e aos municípios a competência de cuidar da saúde pública. Isso significa que, dentro de um sistema único, cada esfera do governo terá um órgão responsável por executar e administrar os serviços destinados à saúde local.

Vale mencionar que a Constituição de 1988 foi a primeira a tratar a saúde como pauta política. Antes dela, não havia legislação que sujeitasse o Poder Público a investir na área."
      />
<section class="page-section-sub-boxlegend " id="about">
        <Container>
       
       <ListarPaineis details={initialDetails} props ="saude" />
        </Container>
      </section>
    </>
  );
}
