import React from 'react';
import '../../App.css';
import "../Cards.css";
import CardItem from "../CardItem";
import NavSubItem from "../pages/pagesBI/NavSubItem";

export default function Infraestrutura() {
  return (
    <>
        <NavSubItem 
      link1 = "/agua"
      name1 = "Água"
      link2 = "/esgoto"
      name2 = "Esgoto"
      link3 = "/iluminacao"
      name3 = "Iluminação"
      link4 = ""
      name4 = ""
      imageicon = "images/infraestruturaIcon.png"
      subname = "Infraestrutura"
      />
      <div className="cards">
      <h1>Indicadores de infraestrutura</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/agua.png"
              text=""
              label="Agua"
              path="/agua"
            />
            <CardItem
              src="images/esgoto.png"
              text=""
              label="Esgoto"
              path="/esgoto"
            />
            <CardItem
              src="images/iluminacao.png"
              text=""
              label="Iluminação"
              path="/iluminacao"
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


