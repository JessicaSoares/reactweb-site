import React from "react";
import "../../App.css";
import "../Cards.css";
import CardItem from "../CardItem";
import NavSubItem from "../pages/pagesBI/NavSubItem";

export default function DesenvolvimentoHumano() {
  return <>
      <NavSubItem 
      link1 = "/desenvHumano"
      name1 = "Desenvolvimento Humano"
      link2 = ""
      name2 = ""
      link3 = ""
      name3 = ""
      link4 = ""
      name4 = ""
      imageicon = "images/desenvolvimentoHumanIcon.png"
      subname = "Desenvolvimento Humano"
      />
      <div className="cards">
      <h1>Indicadores de Desenvolvimento Humano</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://img.icons8.com/dotty/80/26e07f/fingerprint.png"
              text=""
              label="Desenvolvimento Humano"
              path="/desenvhumano"
            />
           
          </ul>
          <ul className="cards__items">
          </ul>
        </div>
      </div>
    </div>
  </>;
}
