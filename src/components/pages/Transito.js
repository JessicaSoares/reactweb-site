import React from "react";
import "../../App.css";
import "../Cards.css";
import CardItem from "../CardItem";
import NavSubItem from "../pages/pagesBI/NavSubItem";

export default function Transito() {
  return (
      <>

          <div className="cards">
          <h1>Indicadores de Trânsito</h1>
          <div className="cards__container">
            <div className="cards__wrapper">
              <ul className="cards__items">
                <CardItem
                src="https://img.icons8.com/dotty/80/26e07f/traffic-light.png"
                  text=""
                  label="Trânsito"
                  path="/transitosub"
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
