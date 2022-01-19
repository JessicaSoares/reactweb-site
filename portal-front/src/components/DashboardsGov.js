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
              path="https://app.powerbi.com/view?r=eyJrIjoiY2M5ODMwY2QtNmYxMC00NTVkLThjYWUtNmE5ZjRlZTU0MDg5IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
            />


            <CardItemgov
              src="images/agriculturagov.png"
              text=""
              label="Agropecuária"
              path="https://app.powerbi.com/view?r=eyJrIjoiMWIzOTJkMDUtODQ2My00YmVkLTkyMWItYzk5YWMzYTRiNTQ2IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSectionb0e6c73a235be3563e14"
            />
            <CardItemgov
              src="images/negociacaogov.png"
              text=""
              label="Empregos"
              path="https://app.powerbi.com/view?r=eyJrIjoiOGFkYWZiZTgtMjg3Ny00YmU4LTlmMDQtZmU4OWQxOTExNGNhIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
            />
          </ul>
          <ul className="cards__itemsgov">
            <CardItemgov
              src="images/empresagov.png"
              text=""
              label="Empresas"
              path="https://app.powerbi.com/view?r=eyJrIjoiNTI1MGNhZDEtMWRhNC00YTMxLTgwYWUtOTYwZGY2ZjA0NzM2IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
            />
            <CardItemgov
              src="images/educacaogov.png"
              text=""
              label="Educação"
              path="https://app.powerbi.com/view?r=eyJrIjoiMWQyZGI3ZjktY2JiMC00NDIxLWEwN2UtM2ZmNjc3Yjk2ZWUyIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection8c64ac8101c870e23b35"
            />
            <CardItemgov
              src="images/pibgov.png"
              text=""
              label="PIB"
              path="https://app.powerbi.com/view?r=eyJrIjoiMzA5YzZhOGQtYTRjNi00OWFjLWE1NTYtZTQ0N2RlMDllNGU3IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
            />
          </ul>

          <ul className="cards__itemsgov">
            <CardItemgov
              src="images/agronegociogov.png"
              text=""
              label="Agronegócio"
              path="https://app.powerbi.com/view?r=eyJrIjoiZWJjMWY4NjQtOTNjZi00MjZkLWI2MTUtNWM4OTRkMDA2YTMzIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSectionbb7462198a140912ce6d"
            />
            <CardItemgov
              src="images/saudegov.png"
              text=""
              label="Saúde"
              path="https://app.powerbi.com/view?r=eyJrIjoiMTU2NGVjYzMtMWQ2Yi00NGNkLTk4ZDItMWQyZDkzN2FlODljIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
            />
            <CardItemgov
              src="images/mulhergov.png"
              text=""
              label="Mulher"
              path="https://app.powerbi.com/view?r=eyJrIjoiZDFmYmMwYjktYTg0OS00Y2M1LWFhOGUtNjM0ODlmMjM4ZTU3IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection"
            />
          </ul>

          <ul className="cards__itemsgov">
            <CardItemgov
              src="images/populacaogov.png"
              text=""
              label="Populacao"
              path="https://app.powerbi.com/view?r=eyJrIjoiNDA3MmZkNzAtYWE3My00NTU5LThlZGEtOGYzMzQyMTJjYzIzIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
            />
            <CardItemgov
              src="images/esgotogov.png"
              text=""
              label="Esgoto"
              path="https://app.powerbi.com/view?r=eyJrIjoiY2RmYjhiZGYtNTE1Zi00OWI0LWEzOWItZGZkM2Q1ZWViMTcyIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection6a19156f389c7f923d78"
            />
            <CardItemgov
              src="images/negociosgov.png"
              text=""
              label="Comércio exterior"
              path="https://app.powerbi.com/view?r=eyJrIjoiNGU1NGExNDktM2E2MS00NmQ1LTg4NmItMzVjYzZiNGM3ZGVmIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
            />
          </ul>

          <ul className="cards__itemsgov">
            <CardItemgov
              src="images/agriculturafamiliargov.png"
              text=""
              label="Agricultura Familiar"
              path="hhttps://app.powerbi.com/view?r=eyJrIjoiNzEzNjM5MzYtOGJkNC00NDUyLTk5NTAtYWVhZDUxZjIxNTg0IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSectionf42cb233b051a4a1e819"
            />
                       <CardItemgov
              src="images/negociosgov.png"
              text=""
              label="Orçamento"
              path="https://app.powerbi.com/view?r=eyJrIjoiMjQ5ZjNiNDQtNDQ0NC00ZDlkLThiNWMtMzgwODNlZTJjZTYyIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection"
            />
  
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardsGov;
