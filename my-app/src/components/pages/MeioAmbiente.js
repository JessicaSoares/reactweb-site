import React from 'react';
import '../../App.css';
import "../Cards.css";
import CardItem from "../CardItem";
import NavSubItem from "../pages/pagesBI/NavSubItem";


export default function MeioAmbiente() {
  return (
    <>
        <NavSubItem 
      link1 = "/meioambientecard"
      name1 = "Meio Ambiente"
      link2 = ""
      name2 = ""
      link3 = ""
      name3 = ""
      link4 = ""
      name4 = ""
      imageicon = "images/meioambienteIcon.png"
      subname = "Meio Ambiente"
      />
      <div className="cards">
      <h1>Indicadores do meio ambiente</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/meioambiente.png"
              text=""
              label="Meio Ambiente"
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


