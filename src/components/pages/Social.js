import React from "react";
import "../../App.css";
import "../Cards.css";
import CardItem from "../CardItem";
import NavSubItem from "../pages/pagesBI/NavSubItem";

export default function Social() {
  return( <>
   <NavSubItem 
      link1 = "/balancacomercial"
      name1 = "Projetos"
      link2 = "/PIBBI"
      name2 = "População atendida"
      link3 = ""
      name3 = ""
      />
      <div className="cards">
      <h1>Indicadores da Assistência Social</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/projetos.png"
              text=""
              label="Projetos"
              path="/graphs"
            />
            <CardItem
              src="images/populacaoatendida.png"
              text=""
              label="População atendida"
              path="/PIBBI"
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
