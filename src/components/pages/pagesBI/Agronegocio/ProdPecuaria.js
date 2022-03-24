
import "../graphs.css";

import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { useState, useEffect, Component } from "react";

import TextSectionItem from "../TextSectionItem";

import ListarPaineis from '../../../ListarPaineis';
import initialDetails from '../../../data/initialDetails';
import ModalDownload from '../ModalDownload';
import NavAgronegocio from "./NavAgronegocio";
import PortalDataService from "../../../services/portal.service";
let xlsx = require('json-as-xlsx')


export default class TutorialsList extends Component {
  constructor(props) {
    super(props);
    
    this.refreshList = this.refreshList.bind(this);
    this.downloadproducaoanimal = this.downloadproducaoanimal.bind(this);
    this.downloadrebanhomunicipal = this.downloadrebanhomunicipal.bind(this);


    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: "",
      nomeBotao:'Esconder',
      classeDiv:'show'
    };
  }

  alterarEstado(){
    var Estado;
    var NomeBotao;
    if(this.state.classeDiv === 'show'){
        Estado="hide";
        NomeBotao='Mostrar';
    }else{
        Estado="show";
        NomeBotao='Esconder';
    }
    this.setState({
        nomeBotao: NomeBotao,
        classeDiv: Estado
    })
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


  downloadproducaoagricola() {
    PortalDataService.downloadproducaoagricola()
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

  downloadempregosporsetor() {
    PortalDataService.downloadempregosporsetor()
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


  downloadproducaoanimal() {
    PortalDataService.downloadproducaoanimal()
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



downloadrebanhomunicipal() {
  PortalDataService.downloadrebanhomunicipal()
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
    const pib=()=>{
      return this.downloadproducaoanimal
    }
    const setor=()=>{
      return this.downloadrebanhomunicipal
    }
    const municipio=()=>{
      return this.downloadempregospormunicipio
    }

  
    return (
     
    <>
   <NavAgronegocio/>
  <TextSectionItem
      titlesection = "Produção Pecuária Municipal"
      textsection = "A pecuária é uma atividade econômica pertencente ao setor primário que diz respeito à criação de animais para a comercialização direta, para o fornecimento de matérias-primas empregadas em outros setores produtivos (como couros, lãs e peles) e, principalmente, para a produção de alimentos como carnes, leites, ovos e mel."
      />

<div className = "teste">   

<ModalDownload download1 = {pib} classeSecundaria1="show" titulo1 ="Produção Animal" 
              download2 = {setor} classeSecundaria2="show"  titulo2 = "Rebanho Municiapal"
              download3 = {municipio} classeSecundaria3="hide "titulo3 = "Por município"
              download4 = {municipio} classeSecundaria4="hide" 
              download5 = {municipio} classeSecundaria5="hide"/>

         </div>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    
<section class="page-section-sub-boxlegend " id="about">
        <Container>
       
        <ListarPaineis details={initialDetails} props ="ProdPecuaria"/>
        </Container>
      </section>
    </>
  );
}}


