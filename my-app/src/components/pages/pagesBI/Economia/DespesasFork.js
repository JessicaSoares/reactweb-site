import React from 'react';
import '../../../../App.css';
import "../../../Cards.css";
import CardItem from "../../../CardItem";
import NavSubItem from "../../../pages/pagesBI/NavSubItem";


export default function DespesasFork() {
  return (
    <>
     <NavSubItem 
    link1 = "/balancacomercial"
    name1 = "Balança comercial"
    link2 = "/pib"
    name2 = "PIB"
    link3 = "/comercioindustria"
    name3 = "Comércio e industria"
    link4 = "/despesasfork"
    name4 = "Despesas"
    link5 = "/receitas"
    name5 = "Receitas"
    imageicon = "images/economy-icon.png"
    subname = "economia"
    />
      <div className="cards">
      <h1>Despesas</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://img.icons8.com/dotty/80/26e07f/low-price.png"
              text=""
              label="Despesas Orçamentárias"
              path="/despesas"
            />
            <CardItem
              src="https://img.icons8.com/dotty/80/26e07f/budget.png"
              text=""
              label="Despesas com Pessoal"
              path="/despesaspessoal"
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


