import React from 'react';
import '../../App.css';
import "../Cards.css";
import CardItem from "../CardItem";
import NavSubItem from "../pages/pagesBI/NavSubItem";


export default function MeioAmbiente() {
  return (
    <>

      <div className="cards">
      <h1>Indicadores do meio ambiente</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://img.icons8.com/dotty/80/26e07f/wildfire.png"
              text=""
              label="Queimadas"
              path="/meioambientecard"
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


