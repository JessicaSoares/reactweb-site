import React from "react";
import "../../App.css";
import NavbarSub from "./pagesBI/NavbarSub";
import "../Cards.css";
import CardItem from "../CardItem";
import NavSubItem from "../pages/pagesBI/NavSubItem";

export default function Economia() {
  return (
    <>
      <NavSubItem 
      link1 = "/balancacomercial"
      name1 = "Balança comercial"
      link2 = "/pib"
      name2 = "PIB"
      link3 = "/comercioindustria"
      name3 = "Comércio e industria"
      imageicon = "images/economy-icon.png"
      subname = "economia"
      />
      <div className="cards">
      <h1>Indicadores da economia</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/balance.png"
              text=""
              label="Balança comercial"
              path="/balancacomercial"
            />
            <CardItem
              src="images/PIB.png"
              text=""
              label="PIB"
              path="/pib"
            />
            <CardItem
              src="images/industry.png"
              text=""
              label="Comercio e Industria"
              path="/comercioindustria"
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
