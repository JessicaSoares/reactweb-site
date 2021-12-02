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
      link4 = "/comercioeindustria"
      name4 = "Comércio e industria"
      imageicon = "images/economy-icon.png"
      subname = "economia"
      />
      <div className="cards">
      <h1>Indicadores de Desenvolvimento Humano</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/desenvolvimentoHuman.png"
              text=""
              label="Desenvolvimento Humano"
              path="/DesenvolvimentoHumano"
            />
           
          </ul>
          <ul className="cards__items">

          </ul>
        </div>
      </div>
    </div>
  </>;
}
