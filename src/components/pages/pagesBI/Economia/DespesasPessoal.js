import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { useState, useEffect , Component } from "react";
import GraphItem from "../GraphItem";
import TextSectionItem from "../TextSectionItem";
import NavEconomia from "./NavEconomia";
import Footer from '../../../Footer';
import PortalDataService from "../../../services/portal.service";
import Button from "@material-ui/core/Button";
import { AiOutlineCloudDownload } from "react-icons/ai";
import ListarPaineis from '../../../ListarPaineis';
import initialDetails from '../../../data/initialDetails';
let xlsx = require('json-as-xlsx')

export default class Despesas extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveTutorials = this.retrieveTutorials.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.removeAllTutorials = this.removeAllTutorials.bind(this);
    this.searchTitle = this.searchTitle.bind(this);
    this.downloadocarmentarios = this.downloadocarmentarios.bind(this);


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

  downloadocarmentarios() {
    PortalDataService.downloadocarmentarios()
      .then(response => {

        const rows = response.data;
        console.log(response.data);
        let csvContent = "data:text/csv;charset=utf-8," 
        + rows;
        var encodedUri = encodeURI(csvContent);
window.open(encodedUri);
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
  return (
    <>
      <NavEconomia/>
      
      <TextSectionItem
      titlesection = "Despesa com Pessoal"
      textsection = "Despesa com pessoal é todo e qualquer recurso consumido ou aplicado pela entidade na remuneração direta ou indireta de seus funcionários. Também são despesas com pessoal os encargos sociais previstos em lei e os benefícios oferecidos espontaneamente, ou concedidos em razão de previsão legal, de acordos firmados entre empregador e empregados ou de decisões judiciais."
      />

      
<section class="page-section-sub-boxlegend " id="about">
        <Container>
       
       <ListarPaineis details={initialDetails} props ="DespesasPessoal" />
        </Container>
      </section>

    </>
  );
}}
