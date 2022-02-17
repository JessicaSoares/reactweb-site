import React from "react";
import { Link } from "react-router-dom";
import "./graphs.css";
import Iframe from "react-iframe";
import NavbarSub from "./NavbarSub";
import { Container, Row, Col } from "react-grid-system";
import "./BoxLegend.css";
import Button from "@material-ui/core/Button";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Footer from '../../GraphFooter';
import wave from "../../../assets/waves.svg";
import styled, { keyframes } from "styled-components";

const Waves = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: -1rem;
  img,svg{
    width:100%;
    height:auto;
}
`;

function GraphItem(props) {
  const data = 'lorem <b>ipsum</b>';
  return (
      <>
      <Col sm={12}>
        {" "}
        <div className="boxlegend">
          <h1 className="titulobi">
            {props.titulobi}
          </h1>
          <Iframe url={props.url} className="economia" height="100%" /> <br />
        <Footer />
        <div class="relative-parent">
   <div class="relative">
   </div>
</div>


          <Accordion classname = "maisinfos" defaultActiveKey="1" >
            <Accordion.Item eventKey="0">
              <Accordion.Header>Mais informações</Accordion.Header>
              <Accordion.Body >
              <div ><div><div
      className="legend"
      dangerouslySetInnerHTML={{__html: props.legend}}
    /></div></div>{" "}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          </div>
      </Col>
    </>
  );
}

export default GraphItem;
