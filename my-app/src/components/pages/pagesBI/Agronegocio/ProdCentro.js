import "../graphs.css";
import { Link } from "react-router-dom";
import Iframe from "react-iframe";
import NavbarSub from "../NavbarSub";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { useState, useEffect, Component } from "react";
import Button from "@material-ui/core/Button";
import { AiOutlineCloudDownload } from "react-icons/ai";
import GraphItem from "../GraphItem";
import TextSectionItem from "../TextSectionItem";
import NavAgronegocio from "./NavAgronegocio";
import PortalDataService from "../../../services/portal.service";

let xlsx = require('json-as-xlsx')

export default class ProdCentro extends Component {
  constructor(props) {
    super(props);
    
    this.refreshList = this.refreshList.bind(this);
    this.downloadagrifamiliar = this.downloadagrifamiliar.bind(this);

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


  downloadagrifamiliar() {
    PortalDataService.downloadagrifamiliar()
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
  

  render() {
    const { searchTitle, tutorials, currentTutorial, currentIndex } = this.state;

    return (
    <>
      <NavAgronegocio/>
      
      <TextSectionItem
      titlesection = "Agricultura Familiar"
      textsection = "Agricultura familiar é toda forma de cultivo de terra que é administrada por uma família e emprega como mão de obra os membros da mesma. Ela é responsável pela maior parcela de empregos gerados no campo e representa a maior parte das propriedades agropecuárias brasileiras. 
      Este segmento caracteriza-se pela produção de uma grande variedade de alimentos, com destaque para culturas como café, feijão, mandioca, banana e abacaxi."
      />
        <div className = "teste">      
        <Button color="success" onClick={this.downloadagrifamiliar} startIcon= {< AiOutlineCloudDownload />} variant="contained">Download dos dados da agricultura familiar    </Button> </div>
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
        titulobi="Percentual dos Chefes de Família por Faixa Etária"
        legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante. Quisque."
        />
        <GraphItem
        url= "https://app.powerbi.com/view?r=eyJrIjoiN2FkYjkyNTYtOGJhNy00ODY0LTk3ZjAtNWZjOWNmNWMwMDgxIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
        titulobi="Total de Chefes de Família por Escolaridade"
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
       </Row>
         
        </Container>
      </section>
    </>
  );
}}
