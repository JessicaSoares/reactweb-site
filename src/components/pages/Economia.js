import React from "react";
import "../../App.css";
import NavbarSub from "./pagesBI/NavbarSub";
import "../Cards.css";
import CardItem from "../CardItem";

export default function Economia() {
  return (
    <>
      <NavbarSub />
      <div className="cards">
      <h1>Indicadores da economia</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/balance.png"
              text=""
              label="Balança comercial"
              path="/graphs"
            />
            <CardItem
              src="images/PIB.png"
              text=""
              label="PIB"
              path="/PIBBI"
            />
            <CardItem
              src="images/industry.png"
              text=""
              label="Comercio e Industria"
              path="/comercioeindustria"
            />
          </ul>
          <ul className="cards__items">

          </ul>
        </div>
      </div>
    </div>
    </>
  );
}
