import React from "react";
import "../Cards.css";
import { Container, Row, Col } from "react-grid-system";
import Iframe from "react-iframe";

function Cards() {
  return (
    <Container>
      <Row>
        <Col sm={12}>
          {" "}
          teste
          <Iframe
            url="https://app.powerbi.com/view?r=eyJrIjoiOWVhOTljZTUtOTg5Yy00ZDBjLWExOTEtZDRmYjQxYTAzMmY1IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
            className="economia"
            height="100%"
            styles={{ height: "25px" }}
          />
        </Col>
        <Col sm={12}>
          teste
          <Iframe
            url="https://app.powerbi.com/view?r=eyJrIjoiNzBhNDFjNzEtMmEyMy00NDY0LWIzYjctZjYwNjkwZWJiMzlmIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
            width="100%"
            className="economia"
            height="100%"
            styles={{ height: "25px" }}
          />
        </Col>
        <Col sm={12}>
          teste
          <Iframe
            url="https://app.powerbi.com/view?r=eyJrIjoiOWI4ZjgyM2MtMTJjNC00YWM1LWExZmYtMjZlODVjOGYyZTQxIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
            width="100%"
            className="economia"
            height="100%"
            styles={{ height: "25px" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Cards;
