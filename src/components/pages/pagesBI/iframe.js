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

function Iframer(props) {

 const refreshPage = ()=>{
     window.location.reload();
     window.location.reload();
  }
  return (
      <>
    
          <iframe loading='eager'  src={props.url} className="economia" height="100%" /> <br />

          <button onClick={refreshPage}>Recarregar Painel</button>

    </>
  );
}

export default Iframer;