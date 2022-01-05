import React from "react";
import "../../App.css";
import "../Cards.css";
import CardItem from "../CardItem";
import NavSubItem from "../pages/pagesBI/NavSubItem";

export default function Social() {
  return( <>
   <NavSubItem 
      link1 = "/educacao"
      name1 = "Educação"
      link2 = "/populacao"
      name2 = "População"
      link3 = "/saude"
      name3 = "Saúde"

      imageicon = "images/populacaoatendidaIcon.png"
      subname = "Social"
      />
      <div className="cards">
      <h1>Indicadores Sociais</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/raiox.png"
              text=""
              label="Educacao"
              path="/educacao"
            />
            <CardItem
              src="images/populacaoatendida.png"
              text=""
              label="População"
              path="/populacao"
            />
            <CardItem
              src="images/saude.png"
              text=""
              label="Saúde"
              path="/saude"
            />
            <CardItem
              src="images/emprego.png"
              text=""
              label="Empregos"
              path="/empregos"
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
