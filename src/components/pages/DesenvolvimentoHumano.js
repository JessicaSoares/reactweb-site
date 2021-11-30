import React from "react";
import "../../App.css";
import "../Cards.css";
import CardItem from "../CardItem";
import NavSubItem from "../pages/pagesBI/NavSubItem";

export default function DesenvolvimentoHumano() {
  return <>
    <NavSubItem 
      link1 = "/balancacomercial"
      name1 = "Balança comercial"
      link2 = "/PIBBI"
      name2 = "PIB"
      link3 = "/comercioeindustria"
      name3 = "Comércio e industria"
      />
      <div className="cards">
      <h1>Indicadores de Desenvolvimento Humano</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/balance.png"
              text=""
              label="Densidade Demográfica"
              path="/graphs"
            />
            <CardItem
              src="images/PIB.png"
              text=""
              label="Índice de Desenvolvimento Humano"
              path="/PIBBI"
            />

            <CardItem
              src="images/industry.png"
              text=""
              label="Número de Eleitores"
              path="/comercioeindustria"
            />
          </ul>
          <ul className="cards__items">

          </ul>
        </div>
      </div>
    </div>
  </>;
}
