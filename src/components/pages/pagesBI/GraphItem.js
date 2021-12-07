import React from "react";
import { Link } from "react-router-dom";
import "./graphs.css";
import Iframe from "react-iframe";
import NavbarSub from "./NavbarSub";
import { Container, Row, Col } from "react-grid-system";
import "./BoxLegend.css";
import Button from "@material-ui/core/Button";
import { AiOutlineCloudDownload } from "react-icons/ai";


function GraphItem(props) {
  return (
    <>
           <Col sm={12}>
              {" "}
              <div className="boxlegend">
                <h1 className="titulobi">
                    {props.titulobi}
                </h1>
                <Iframe
                  url={props.url}
                  className="economia"
                  height="100%"
                />{" "}
                <br />
                <Link to="/sign-up">
                  {" "}
                  <Button
                    url="dsf"
                    variant="contained"
                    color="primary"
                    startIcon={<AiOutlineCloudDownload />}
                  >
                    Baixar Dados
                  </Button>{" "}
                </Link>{" "}
                <div className="legend">
                  {" "}
                 {props.legend}
                </div>{" "}
              </div>
            </Col>
    </>
  );
}

export default GraphItem;
