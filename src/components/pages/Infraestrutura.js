import React from 'react';
import '../../App.css';
import "../Cards.css";
import CardItem from "../CardItem";
import NavSubItem from "../pages/pagesBI/Infraestrutura/NavInfraestrutura";

export default function Infraestrutura() {
  return (
    <>

      <div className="cards">
      <h1>Indicadores da Infraestrutura</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
  
            <CardItem
              src="https://img.icons8.com/dotty/80/26e07f/waste.png"
              text=""
              label="Lixo"
              path="/lixo"
            />
                        <CardItem
           src="https://img.icons8.com/dotty/80/26e07f/piping.png"
              text=""
              label="Esgoto"
              path="/esgoto"
            />
                        <CardItem
           src="https://img.icons8.com/dotty/80/26e07f/plumbing.png"
              text=""
              label="Água"
              path="/agua"
            />
                                <CardItem
              src="https://img.icons8.com/dotty/80/26e07f/light-on.png"
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


