import React from 'react';
import '../../App.css';
import "../Cards.css";
import CardItem from "../CardItem";
import NavSubItem from "../pages/pagesBI/NavSubItem";

export default function Orcamentarios() {
  return (
    <>

      <div className="cards">
      <h1>Painéis Orçamentários</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/despesas.png"
              text=""
              label="Despesas Orçamentárias"
              path="/despesaorcamentaria"
            />
            <CardItem
              src="images/receitas.png"
              text=""
              label="Receitas Orçamentárias"
              path="/receitaorcamentaria"
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


