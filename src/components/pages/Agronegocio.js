import React from "react";
import "../../App.css";
import "../Cards.css";
import CardItem from "../CardItem";
import NavSubItem from "../pages/pagesBI/NavSubItem";

export default function Agronegocio() {
  return <>

    <div className="cards">
      <h1>Indicadores do Agronegócio</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://img.icons8.com/dotty/80/26e07f/sprout.png"
              text=""
              label="Produção agrícola Municipal"
              path="/producaoagricola"
            />
            <CardItem
              src="https://img.icons8.com/dotty/80/26e07f/spade.png"
              text=""
              label="Agricultura Familiar"
              path="/centrodeabastecimento"
            />
            <CardItem
              src="https://img.icons8.com/dotty/80/26e07f/cuts-of-beef.png"
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
