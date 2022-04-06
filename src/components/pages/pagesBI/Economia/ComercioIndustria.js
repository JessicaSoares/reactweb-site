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
import NavEconomia from "./NavEconomia";
import Footer from '../../../Footer';
import ListarPaineis from '../../../ListarPaineis';
import initialDetails from '../../../data/initialDetails';
import ModalDownload from '../ModalDownload';
import PortalDataService from "../../../services/portal.service";
let xlsx = require('json-as-xlsx')
const xl = require('excel4node');
const wb = new xl.Workbook();
const ws = wb.addWorksheet('Worksheet Name');




export default class TutorialsList extends Component {
  constructor(props) {
    super(props);

    this.refreshList = this.refreshList.bind(this);
    this.downloadempresas = this.downloadpequenoporte.bind(this);
    this.downloadmedioporte = this.downloadmedioporte.bind(this);

    this.downloaddemais = this.downloaddemais.bind(this);
    this.downloadgrandeporte = this.downloadgrandeporte.bind(this);
    this.downloadnaoinformado = this.downloadnaoinformado.bind(this);
    this.downloadmicroempresa = this.downloadmicroempresa.bind(this);




    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: "",
      nomeBotao: 'Esconder',
      classeDiv: 'show'
    };
  }

  alterarEstado() {
    var Estado;
    var NomeBotao;
    if (this.state.classeDiv === 'show') {
      Estado = "hide";
      NomeBotao = 'Mostrar';
    } else {
      Estado = "show";
      NomeBotao = 'Esconder';
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


  downloadpib() {
    PortalDataService.downloadpib()
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

  downloadpequenoporte() {
    PortalDataService.downloadpequenoporte()
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

  downloadmedioporte() {
    PortalDataService.downloadmedioporte()
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

  
  downloadnaoinformado() {
    PortalDataService.downloadnaoinformado()
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

  downloadmicroempresa() {
    PortalDataService.downloadmicroempresa()
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

  downloaddemais() {
    PortalDataService.downloaddemais()
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
  downloadgrandeporte() {
    PortalDataService.downloadgrandeporte()
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
    const pib = () => {
      return this.downloadpequenoporte
    }
    const setor = () => {
      return this.downloadmedioporte
    }
    const demais = () => {
      return this.downloaddemais
    }

    const microempresa  = () => {
      return this.downloadmicroempresa
    }

    const naoinformado = () => {
      return this.downloadnaoinformado
    }

    const grandeporte = () => {
      return this.downloadgrandeporte
    }

    return (

      <>
        <NavEconomia />
        <TextSectionItem
          titlesection="Comércio e Indústria"
          textsection=" Comércio e Indústria é toda atividade humana que através do trabalho transforma matéria prima em produtos manufaturados que podem ou não ser comercializados."
        />
        <div className="teste">

          <ModalDownload download1={pib} classeSecundaria1="show" titulo1="Pequeno porte"
            download2={setor} classeSecundaria2="show" titulo2="Médio Porte"
            download3={demais} classeSecundaria3="show " titulo3="Demais empresas"
            download4={microempresa} classeSecundaria4="show" titulo4="Microempresas"
            download5={grandeporte} classeSecundaria5="show" titulo5="Grande Porte" />

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

            <ListarPaineis details={initialDetails} props="ComercioIndustria" />
          </Container>
        </section>
      </>
    );
  }
}
