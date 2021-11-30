import React from "react";
import "../../App.css";
import "../Cards.css";
import CardItem from "../CardItem";
import NavSubItem from "../pages/pagesBI/NavSubItem";

export default function Agronegocio() {
  return <>
  
  <NavSubItem 
      link1 = "/producaoagricola"
      name1 = "Produção agrícola Municipal"
      link2 = "/centrodeabastecimento"
      name2 = "Produção Centro de Abastecimento de Parauapebas"
      link3 = "/pecuaria"
      name3 = "Produção Pecuária Municipal"
      imageicon = "images/economy-icon.png"
      subname = "Agronegócio"
      />
      <div className="cards">
      <h1>Indicadores do Agronegócio</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/producaoagricola.png"
              text=""
              label="Produção agrícola Municipal"
              path="/producaoagricola"
            />
            <CardItem
              src="images/centrodeabastecimento.png"
              text=""
              label="Produção Centro de Abastecimento de Parauapebas"
              path="/centrodeabastecimento"
            />
            <CardItem
              src="images/pecuaria.png"
              text=""
              label="Produção Pecuária Municipal"
              path="/pecuaria"
            />
          </ul>
          <ul className="cards__items">

          </ul>
        </div>
      </div>
    </div>
    </>;
}
