import "../BoxLegend.css";
import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { useState, useEffect, Component } from "react";
import GraphItem from "../GraphItem";
import TextSectionItem from "../TextSectionItem";
import NavSocial from "./NavSocial";
import PortalDataService from "../../../services/portal.service";
import Button from "@material-ui/core/Button";
import { AiOutlineCloudDownload } from "react-icons/ai";

let xlsx = require('json-as-xlsx')

export default class TutorialsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveTutorials = this.retrieveTutorials.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.removeAllTutorials = this.removeAllTutorials.bind(this);
    this.searchTitle = this.searchTitle.bind(this);
    this.download = this.download.bind(this);


    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveTutorials();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveTutorials() {
    PortalDataService.getAll()
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveTutorials();
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });
  }

  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index
    });
  }

  removeAllTutorials() {
    PortalDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  download() {
    PortalDataService.download()
      .then(response => {

        const rows = response.data;
        console.log(response.data);
        let csvContent = "data:text/csv;charset=utf-8," 
        + rows;
        var encodedUri = encodeURI(csvContent);
window.open(encodedUri , "_Self");
let settings = {
  fileName: 'MySpreadsheet', // Name of the resulting spreadsheet
  extraLength: 3, // A bigger number means that columns will be wider
  writeOptions: {} // Style options from https://github.com/SheetJS/sheetjs#writing-options
}

xlsx(rows, settings)
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  
  searchTitle() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });

    PortalDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, tutorials, currentTutorial, currentIndex } = this.state;

    return (
     
    <>
   <NavSocial/>

      <TextSectionItem
      titlesection = "Movimento de Empregos"
      textsection = "O Cadastro Geral de Empregados e Desempregados (CAGED) foi criado como registro permanente de admissões e dispensa de empregados, sob o regime da Consolidação das Leis do Trabalho (CLT). É utilizado pelo Programa de Seguro-Desemprego, para conferir os dados referentes aos vínculos trabalhistas, além de outros programas sociais.
      Este Cadastro serve, ainda, como base para a elaboração de estudos, pesquisas, projetos e programas ligados ao mercado de trabalho, ao mesmo tempo em que subsidia a tomada de decisões para ações governamentais. Os dados dos gráficos abaixo foram coletados da FONTE: Novo CAGED "/>

<div className = "teste">      
          <Button color="success" onClick={this.download} startIcon= {< AiOutlineCloudDownload />} variant="contained">Download dos dados do CAGED   </Button> </div>
      <section class="page-section-sub-boxlegend " id="about">
        <Container>
          <Row> 
          

                <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiMTBkOTQ0MzMtYWVmZS00Y2I3LWFiNmUtZTRiMTUyZThkZWFhIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Quantitativo de Empregos"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        /> 
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiNzJlNDg1Y2YtMzcxOC00ZjY0LTg1NTQtMjA2M2YwOTBjYzUzIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Evolução de Admitidos e Desligados"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />      
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiOTlmYmYwMGQtMTljNi00ZTMyLTk5NjgtZjVmZDdlYTMwZDJjIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Admissões por Grupo Econômico"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        /> 
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiNjI3MjI4OTktMDYzZS00YmRiLWJlOTQtZGI3ZDM4YjFlMThkIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Admissões e Desligamentos"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />       
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiMWFiMmEwYzItYTUzNC00NzMxLTljNTItOTQ2NTQxMmFiMjIwIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Ranking por Municipio"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
          </Row>
        </Container>
      </section>
    </>
  );
}}
