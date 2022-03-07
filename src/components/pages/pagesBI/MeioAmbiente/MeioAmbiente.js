import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { useState, useEffect, Component  } from "react";
import GraphItem from "../GraphItem";
import TextSectionItem from "../TextSectionItem";
import NavMeioAmbiente from "./NavMeioAmbiente";                    
import PortalDataService from "../../../services/portal.service";

let xlsx = require('json-as-xlsx')


export default class MeioAmbiente extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveTutorials = this.retrieveTutorials.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.removeAllTutorials = this.removeAllTutorials.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.downloadfolhapagamento = this.downloadfolhapagamento.bind(this);


    this.state = {
      defesas: [],
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
          defesas: response.data
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

  downloadfolhapagamento() {
    PortalDataService.downloadfolhapagamento()
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
          defesas: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {



  return (
    <>
      <NavMeioAmbiente/>
      
      <TextSectionItem
      titlesection = "Queimadas"
      textsection = "A Defesa Civil de Parauapebas têm como objetivo articular um conjunto de medidas com a finalidade de prevenir e limitar os recursos, as perdas e os danos que estão sujeitos à população, em decorrência de calamidade pública e situação de emergência. Dentro de suas finalidades temos as queimadas que podem causar danos materiais e ambientais á população."
      />

<button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.downloadfolhapagamento}
          >
            Download dos dados do CAGED
          </button>
      <section class="page-section-sub-boxlegend " id="about">
        <Container>
          <Row>
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiNmIyZDMzZGUtYTU1Ni00ZjM0LTgxMzEtYWVjMDMwMWNlODdiIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection"
        titulobi="Ocorrência de 2021 por Intervalo de Horas em Parauapebas"
        legend = "* Fonte:Defesa Civil de Parauapebas"
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiNTYyMjBhOTItZTNjNi00ZDg0LTk3MmQtZDljOGQxMzFmNjgzIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Duração das Queimadas em Parauapebas"
        legend = "* Fonte:Defesa Civil de Parauapebas"
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiOWVlNDk4NWItZDQxZC00YTIxLWI0ZDktNmZhNjhiMTE0Nzk5IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection3de81155a9b64f3b6838"
        titulobi="Indicador de Queimadas por Bairro de Parauapebas"
        legend = "* Fonte:Defesa Civil de Parauapebas"
        />
           <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiYzFjODcyNDctOTc5Yy00MDI2LWE3NjctOTEzZmE3M2U0YTg5IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Indicador de Queimadas por Zona em Parauapebas"
        legend = "* Fonte:Defesa Civil de Parauapebas"
        />
         <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiOWI3YzYxMmItYzk0Mi00ZDNiLThjMGItYjFiOTFjM2YwYjFmIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Quantidade de Focos de Queimadas por Natureza em Parauapebas"
        legend = "* Fonte:Defesa Civil de Parauapebas"
        />       
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiNzQ5OGYwNTYtMmFkYi00M2FlLTk5NzUtY2Q3MGY2N2YzY2NiIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Indicador de Queimadas por Município"
        legend = "* Fonte:Defesa Civil de Parauapebas"
        />
         <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiMDk4YWU0M2MtYjhlYS00YmYyLWE1MDItN2MxYzkwNTY5NjhjIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Indicador de Queimadas por Chamado ao Mês em Parauapebas"
        legend = "* Fonte:Defesa Civil de Parauapebas"
        />   
         <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiNzlkMzkzZWEtYzVjNi00ZjI1LTljZjctYmUzZjdlMjA2MTJjIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Tabela de Indicador de Queimadas em Parauapebas"
        legend = "* Fonte:Defesa Civil de Parauapebas"
        />    
          </Row>
        </Container>
      </section>
    </>
  );
}}
