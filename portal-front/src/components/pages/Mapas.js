
import React, { useState, useEffect } from "react";
import NavSubItem from "../../components/pages/pagesBI/Economia/NavSubEconomia";
import CardItem from "../CardItem";


export default function Mapas() {
  return (
    <>
        <NavSubItem 
      link1 = "/infraestruturamapas"
      name1 = "Infraestrutura"
      link2 = "/meioambientemapas"
      name2 = "Meio Ambiente"
      link3 = "/patrimoniomapas"
      name3 = "Patrimonio Público"
      link4 = "/turismomapas"
      name4 = "Turismo"

      link5 = "/receitas"
      name5 = "Urbanismo"
      imageicon = "images/map.png"
      subname = "Mapas Temáticos"
      />
      <div className="cards">
      <h1>Mapas temáticos</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/inframaps.png"
              text=""
              label="Infraestrtura"
              path="/meioambientecard"
            />
                     <CardItem
              src="images/ambientemaps.png"
              text=""
              label="Meio Ambiente"
              path="/meioambientecard"
            />
                     <CardItem
              src="images/patrimoniomaps.png"
              text=""
              label="Patrimônio Público"
              path="/meioambientecard"
            />
                     <CardItem
              src="images/turismaps.png"
              text=""
              label="Turismo"
              path="/meioambientecard"
            />
                     <CardItem
              src="images/dinheiromaps.png"
              text=""
              label="Urbanismo"
              path="/urbanismomaps"
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


