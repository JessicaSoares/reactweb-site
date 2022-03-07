import React from "react";
import "./Cards.css";
import CardItem from "./CardItem"
import CardItemgov from "./CardItemGov";

function Cards() {
  return (
    <div className="cards">
      <h1>Indicadores mais acessados</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
            
            src="https://img.icons8.com/dotty/80/26e07f/exchange.png"
              label="Economia"
              path="/economia"
            />
            <CardItem
          src="https://img.icons8.com/dotty/80/26e07f/graduation-cap.png"
              text=""
              label="Educação"
              path="/Social"
            />
            <CardItem
           src="https://img.icons8.com/dotty/80/26e07f/tractor.png"
              text=""
              label="Agricultura"
              path="/Agronegocio"
            />
          </ul>

        </div>
      </div>

      <h1>Mapas mais acessados</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
          <CardItem
              src="images/inframap.png"
              text=""
              label="Infraestrutura"
              path="/infraestruturamaps"
            />
                     <CardItem
           src="images/ambientemap.png"
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
           src="https://img.icons8.com/dotty/80/4a90e2/plumbing.png"
              text=""
              label="Abastecimento de água"
              path="https://app.powerbi.com/view?r=eyJrIjoiY2M5ODMwY2QtNmYxMC00NTVkLThjYWUtNmE5ZjRlZTU0MDg5IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
            />


            <CardItemgov
      src="https://img.icons8.com/dotty/80/4a90e2/windmill.png"
              text=""
              label="Agropecuária"
              path="https://app.powerbi.com/view?r=eyJrIjoiMWIzOTJkMDUtODQ2My00YmVkLTkyMWItYzk5YWMzYTRiNTQ2IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSectionb0e6c73a235be3563e14"
            />
            <CardItemgov
            src="https://img.icons8.com/dotty/80/4a90e2/permanent-job.png"
              text=""
              label="Empregos"
              path="https://app.powerbi.com/view?r=eyJrIjoiOGFkYWZiZTgtMjg3Ny00YmU4LTlmMDQtZmU4OWQxOTExNGNhIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
            />
          </ul>

        </div>
      </div>
    </div>

    
  );
}

export default Cards;
