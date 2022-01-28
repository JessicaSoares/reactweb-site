import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import "./DashboardsGov.css";
import CardItemgov from "./CardItemGov";

function Cards() {
  return (
    <div className="cards">
      <h1>Indicadores mais acessados</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/coin_icon.png"
              text=""
              label="Economia"
              path="/economia"
            />
            <CardItem
              src="images/graduation_icon.png"
              text=""
              label="Educação"
              path="/products"
            />
            <CardItem
              src="images/rural_icon.png"
              text=""
              label="Agricultura"
              path="/sign-up"
            />
          </ul>

        </div>
      </div>

      <h1>Mapas mais acessados</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
          <CardItem
              src="images/inframaps.png"
              text=""
              label="Infraestrutura"
              path="/infraestruturamaps"
            />
                     <CardItem
              src="images/ambientemaps.png"
              text=""
              label="Meio Ambiente"
              path="/meioambientemaps"
            />
                     <CardItem
              src="images/patrimoniomaps.png"
              text=""
              label="Patrimônio Público"
              path="/patrimoniomaps"
            />
          </ul>
          </div>
      </div>
          <h1>Dashboards Governamentais mais acessados</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
         <CardItemgov
              src="images/aguagov.png"
              text=""
              label="Abastecimento de água"
              path="https://app.powerbi.com/view?r=eyJrIjoiM2Q0ZDJjNDItMjY1Ni00NDM1LWI1MjctNzU5MzEwNTBhMWUwIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection6a19156f389c7f923d78"
            />


            <CardItemgov
              src="images/agriculturagov.png"
              text=""
              label="Agropecuária"
              path="https://app.powerbi.com/view?r=eyJrIjoiZTc2YzJjNjgtMDBjOS00Zjg4LWEyOTUtNjM5MGQ4YmQzYjAzIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
            />
            <CardItemgov
              src="images/negociacaogov.png"
              text=""
              label="Empregos"
              path="https://app.powerbi.com/view?r=eyJrIjoiMjdmMTNiMGItMGQ5ZS00YmFkLTkxYTctNDgzZDhlYjA0ZDY3IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
            />
          </ul>

        </div>
      </div>
    </div>

    
  );
}

export default Cards;
