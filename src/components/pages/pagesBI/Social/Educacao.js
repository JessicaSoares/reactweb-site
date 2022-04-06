import "../BoxLegend.css";
import ListarPaineis from '../../../ListarPaineis';
import initialDetails from '../../../data/initialDetails';
import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { useState, useEffect, Component } from "react";
import TextSectionItem from "../TextSectionItem";
import NavSocial from "./NavSocial";
import PortalDataService from "../../../services/portal.service";
import ModalDownload from '../ModalDownload';
import 'react-responsive-modal/styles.css';
let xlsx = require('json-as-xlsx')

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default class TutorialsList extends Component {
  constructor(props) {
    super(props);

    this.refreshList = this.refreshList.bind(this);
    this.downloadescolasealunos = this.downloadescolasealunos.bind(this);
    this.downloadnotaideb = this.downloadnotaideb.bind(this);

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

  downloadescolasealunos() {
    PortalDataService.downloadescolasealunos()
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

  downloadnotaideb() {
    PortalDataService.downloadnotaideb()
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

  downloadempregosporsexo() {
    PortalDataService.downloadempregosporsexo()
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
    const sexo = () => {
      return this.downloadescolasealunos
    }
    const setor = () => {
      return this.downloadnotaideb
    }
    const municipio = () => {
      return this.downloadempregospormunicipio
    }

    return (

      <>
        <NavSocial />
        <TextSectionItem
          titlesection="Educação Municipal de Parauapebas"
          textsection="O sistema educativo é o conjunto de meios pelo qual se concretiza o direito à educação. O sistema educativo desenvolve-se através de um conjunto organizado de estruturas e de ações diversificadas, por iniciativa e sob a responsabilidade de diferentes instituições e entidades, públicas e privadas."
        />

        <div className="teste">

          <ModalDownload download1={sexo} classeSecundaria1="show" titulo1="Escolas e alunos"
            download2={setor} classeSecundaria2="show" titulo2="IDEB"
            download3={municipio} classeSecundaria3="hide" titulo3="Por município"
            download4={municipio} classeSecundaria4="hide"
            download5={municipio} classeSecundaria5="hide" />

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
            <ListarPaineis details={initialDetails} props="Educacao" />
          </Container>
        </section>
      </>
    );
  }
}
