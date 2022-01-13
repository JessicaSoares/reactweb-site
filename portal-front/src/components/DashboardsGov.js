import React from "react";
import "./DashboardsGov.css";
import CardItemgov from "./CardItemGov";

function DashboardsGov() {
  return (
    <div className="cardsgov">
      <h1>Dashboards governamentais
      </h1>
      <div className="cards__containergov">
        <div className="cards__wrappergov">
          <ul className="cards__itemsgov">
            <CardItemgov
              src="images/aguagov.png"
              text=""
              label="Abastecimento de água"
              path="/economia"
            />
            <CardItemgov
              src="images/agriculturagov.png"
              text=""
              label="Agropecuária"
              path="/products"
            />
            <CardItemgov
              src="images/negociacaogov.png"
              text=""
              label="Empregos"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__itemsgov">
            <CardItemgov
              src="images/empresagov.png"
              text=""
              label="Empresas"
              path="/services"
            />
            <CardItemgov
              src="images/educacaogov.png"
              text=""
              label="Educação"
              path="/products"
            />
            <CardItemgov
              src="images/pibgov.png"
              text=""
              label="PIB"
              path="/sign-up"
            />
          </ul>

          <ul className="cards__itemsgov">
            <CardItemgov
              src="images/agronegociogov.png"
              text=""
              label="Agronegócio"
              path="/services"
            />
            <CardItemgov
              src="images/saudegov.png"
              text=""
              label="Saúde"
              path="/products"
            />
            <CardItemgov
              src="images/mulhergov.png"
              text=""
              label="Mulher"
              path="/sign-up"
            />
          </ul>

          <ul className="cards__itemsgov">
            <CardItemgov
              src="images/populacaogov.png"
              text=""
              label="Populacao"
              path="/services"
            />
            <CardItemgov
              src="images/esgotogov.png"
              text=""
              label="Esgoto"
              path="/products"
            />
            <CardItemgov
              src="images/negociosgov.png"
              text=""
              label="Comércio exterior"
              path="/sign-up"
            />
          </ul>

          <ul className="cards__itemsgov">
            <CardItemgov
              src="images/agriculturafamiliargov.png"
              text=""
              label="Agricultura Familiar"
              path="/services"
            />
  
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardsGov;
