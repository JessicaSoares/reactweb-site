import React from 'react';
import '../../App.css';
import "../Cards.css";
import CardItem from "../CardItem";
import NavSubItem from "../pages/pagesBI/Infraestrutura/NavInfraestrutura";

export default function Infraestrutura() {
  return (
    <>
        <NavSubItem 
      link1 = "/lixo"
      name1 = "Lixo"
      link2 = "/agua"
      name2 = "Agua"
      link3 = "/esgoto"
      name3 = "Esgoto"
      link4 = "/iluminacao"
      name4 = "Ilumicao"
      />
      <div className="cards">
      <h1>Indicadores da Infraestrutura</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
  
            <CardItem
              src="images/lixo.png"
              text=""
              label="Lixo"
              path="/lixo"
            />
                        <CardItem
              src="images/esgoto.png"
              text=""
              label="Esgoto"
              path="/esgoto"
            />
                        <CardItem
              src="images/agua.png"
              text=""
              label="Água"
              path="/agua"
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


