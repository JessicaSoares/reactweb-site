import React from "react";
import "../../App.css";
import "../Cards.css";
import CardItem from "../CardItem";
import NavSubItem from "../pages/pagesBI/NavSubItem";

export default function Educacao() {
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
      <h1>Indicadores da economia</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/balance.png"
              text=""
              label="Docentes"
              path="/docentes"
            />
            <CardItem
              src="images/PIB.png"
              text=""
              label="Evasão Escolar"
              path="/evasaoescolar"
            />
            <CardItem
              src="images/industry.png"
              text=""
              label="IDEB"
              path="/ideb"
            />
            <CardItem
              src="images/industry.png"
              text=""
              label="Matriculas"
              path="'/matriculas"
            />
            <CardItem
              src="images/industry.png"
              text=""
              label="Raio X da Educação"
              path="/raiox"
            />
            <CardItem
              src="images/industry.png"
              text=""
              label="Taxa de Aparovação e Reprovação"
              path="/aprovacaoereprovacao"
            />
          </ul>
          <ul className="cards__items">

          </ul>
        </div>
      </div>
    </div>
  </>;
}
