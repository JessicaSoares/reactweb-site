
import React, { useState, useEffect } from "react";
import NavMaps from "./Mapas/NavMaps";
import CardItem from "../CardItem";


export default function Mapas() {
  return (
    <>
        <NavMaps 
 
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


