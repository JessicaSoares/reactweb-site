import React from "react";
import "../../App.css";
import NavbarSub from "./pagesBI/NavbarSub";
import "../Cards.css";
import CardItem from "../CardItem";
import NavSubItem from "../pages/pagesBI/Economia/NavSubEconomia";

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
    link4 = "/despesasfork"
    name4 = "Despesas"
    link5 = "/receitas"
    name5 = "Receitas"
    imageicon = "images/economy-icon.png"
    subname = "economia"
    />
      <div className="cards">
      <h1>Indicadores da economia</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
           src="https://img.icons8.com/dotty/80/26e07f/scales.png"
              text=""
              label="Balança comercial"
              path="/balancacomercial"
            />
            <CardItem
           src="https://img.icons8.com/dotty/80/26e07f/banknotes.png"
              text=""
              label="PIB"
              path="/pib"
            />
            <CardItem
             src="https://img.icons8.com/dotty/80/26e07f/factory.png"
              text=""
              label="Comercio e Industria"
              path="/comercioindustria"
            />         
            <CardItem
            src="https://img.icons8.com/dotty/80/26e07f/ledger.png"
              text=""
              label="Receitas"
              path="/receitas"
            />
            <CardItem
           src="https://img.icons8.com/dotty/80/26e07f/low-price.png"
              text=""
              label="Despesas"
              path="/despesasmenu"
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
