import React from "react";
import "../../App.css";
import "../Cards.css";
import CardItem from "../CardItem";
import NavSubSocial from "../pages/pagesBI/Economia/NavSubEconomia";



export default function Social() {
  return( <>
 
      <div className="cards">
      <h1>Indicadores Sociais</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
         src="https://img.icons8.com/dotty/80/26e07f/motarboard.png"
              text=""
              label="Educacao"
              path="/educacao"
            />
            <CardItem
       src="https://img.icons8.com/dotty/80/26e07f/crowd.png"
              text=""
              label="População"
              path="/populacao"
            />
            <CardItem
           src="https://img.icons8.com/dotty/80/26e07f/heart-with-pulse.png"
              text=""
              label="Saúde"
              path="/saude"
            />
            <CardItem
        src="https://img.icons8.com/dotty/80/26e07f/meeting.png"
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
