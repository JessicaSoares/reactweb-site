import React from "react";
import "./Cards.css";
import CardItem from "./CardItem"
import CardItemgov from "./CardItemGov";

function DashboardsGov() {
  return (
    <div className="cards">
      <h1>Dashboards governamentais
      </h1>
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
         src="https://img.icons8.com/dotty/80/4a90e2/factory.png"
              text=""
              label="Empresas"
              path="https://app.powerbi.com/view?r=eyJrIjoiNTI1MGNhZDEtMWRhNC00YTMxLTgwYWUtOTYwZGY2ZjA0NzM2IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
            />


            <CardItemgov
            src="https://img.icons8.com/dotty/80/4a90e2/permanent-job.png"
              text=""
              label="Empregos"
              path="https://app.powerbi.com/view?r=eyJrIjoiOGFkYWZiZTgtMjg3Ny00YmU4LTlmMDQtZmU4OWQxOTExNGNhIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
            />
          </ul>
          <ul className="cards__items">
         
            <CardItemgov
         src="https://img.icons8.com/dotty/80/4a90e2/student-female.png"
              text=""
              label="Educação"
              path="https://app.powerbi.com/view?r=eyJrIjoiMWQyZGI3ZjktY2JiMC00NDIxLWEwN2UtM2ZmNjc3Yjk2ZWUyIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection8c64ac8101c870e23b35"
            />
            <CardItemgov
             src="https://img.icons8.com/dotty/80/4a90e2/banknotes.png"
              text=""
              label="PIB"
              path="https://app.powerbi.com/view?r=eyJrIjoiMzA5YzZhOGQtYTRjNi00OWFjLWE1NTYtZTQ0N2RlMDllNGU3IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
            />
             <CardItem
          src="https://img.icons8.com/dotty/80/4a90e2/tractor.png"
              text=""
              label="Agronegócio"
              path="/agronegociogov"
            />
          </ul>

          <ul className="cards__items">
           
           
            <CardItemgov
            src="https://img.icons8.com/dotty/80/4a90e2/guest-female.png"
              text=""
              label="Mulher"
              path="https://app.powerbi.com/view?r=eyJrIjoiZDFmYmMwYjktYTg0OS00Y2M1LWFhOGUtNjM0ODlmMjM4ZTU3IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection"
            />
             <CardItemgov
             src="https://img.icons8.com/dotty/80/4a90e2/groups.png"
              text=""
              label="Populacao"
              path="https://app.powerbi.com/view?r=eyJrIjoiNDA3MmZkNzAtYWE3My00NTU5LThlZGEtOGYzMzQyMTJjYzIzIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
            />
            <CardItemgov
              src="https://img.icons8.com/dotty/80/4a90e2/water-pipe.png"
              text=""
              label="Esgoto"
              path="https://app.powerbi.com/view?r=eyJrIjoiY2RmYjhiZGYtNTE1Zi00OWI0LWEzOWItZGZkM2Q1ZWViMTcyIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection6a19156f389c7f923d78"
            />
          </ul>

          <ul className="cards__items">
           
            <CardItemgov
              src="https://img.icons8.com/dotty/80/4a90e2/bank-building.png"
              text=""
              label="Comércio exterior"
              path="https://app.powerbi.com/view?r=eyJrIjoiNGU1NGExNDktM2E2MS00NmQ1LTg4NmItMzVjYzZiNGM3ZGVmIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
            />

                       <CardItemgov
           src="https://img.icons8.com/dotty/80/4a90e2/fund-accounting.png"
              text=""
              label="Orçamento"
              path="https://app.powerbi.com/view?r=eyJrIjoiMjQ5ZjNiNDQtNDQ0NC00ZDlkLThiNWMtMzgwODNlZTJjZTYyIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection"
            />

          <CardItemgov
          src="https://img.icons8.com/dotty/80/4a90e2/spiral-bulb.png"
              text=""
              label="Iluminação Pública"
              path="https://app.powerbi.com/view?r=eyJrIjoiOTBmYWVlZTItNTZjOC00NDA4LTliMTYtOWNjYTNjN2RkYzU3IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection"
            />


          </ul>

          <ul className="cards__items">
           
           <CardItem
             src="https://img.icons8.com/dotty/80/4a90e2/environment.png"
             text=""
             label="Meio Ambiente"
             path="/meioambientegov"
           />
         </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardsGov;
