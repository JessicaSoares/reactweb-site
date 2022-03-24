import React from "react";
import { Link } from "react-router-dom";
import "../pagesBI/graphs.css";
import Iframe from "react-iframe";
import NavbarSub from "../pagesBI/NavbarSub";
import { Container, Row, Col } from "react-grid-system";
import "../pagesBI/BoxLegend.css"
import Button from "@material-ui/core/Button";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Footer from '../../GraphFooter';
import Report from "powerbi-report-component";
function GraphItem(person) {

  return (
      <>

<div class="container">
    <div class="row">
      <div class="col-sm"></div>
      <Col sm={11}>
        {" "}
        <div className="boxlegend">
          <h1 className="titulobi">
            {person.titulobi}
          </h1>
         
          <iframe src={person.url} className="mapas"
        loading="eager"
       ></iframe> <br />
          <Accordion classname = "maisinfos" defaultActiveKey="1" >
            <Accordion.Item eventKey="0">
              <Accordion.Header>Mais informações</Accordion.Header>
              <Accordion.Body >
              <div ><div><div
      className="legend"
      dangerouslySetInnerHTML={{__html: person.legend}}
    /></div></div>{" "}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          </div>
      </Col>
      <div class="col-sm"></div>
    </div>
  </div>
    </>
  );
}

export default GraphItem;