import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { useState, useEffect, Component  } from "react";
import GraphItem from "../GraphItem";
import TextSectionItem from "../TextSectionItem";
import NavMeioAmbiente from "./NavMeioAmbiente";                    
import PortalDataService from "../../../services/portal.service";
import ListarPaineis from '../../../ListarPaineis';
import initialDetails from '../../../data/initialDetails';
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

<section class="page-section-sub-boxlegend " id="about">
        <Container>
       
       <ListarPaineis details={initialDetails} props ="MeioAmbiente" />
        </Container>
      </section>
    </>
  );
}}
