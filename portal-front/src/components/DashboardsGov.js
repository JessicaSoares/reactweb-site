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
          <ul className="cards__itemsgov">
            <CardItemgov
              src="images/empresagov.png"
              text=""
              label="Empresas"
              path="https://app.powerbi.com/view?r=eyJrIjoiMzMzMzIxMzUtNTA3OC00ZTg3LTk4YzEtNmQ4NzY5MzRiOWViIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
            />
            <CardItemgov
              src="images/educacaogov.png"
              text=""
              label="Educação"
              path="https://app.powerbi.com/view?r=eyJrIjoiNDE1OTMyMDEtMzlkMy00MjQxLWJiYzYtNmYwMzA2ZjI4ZDk3IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSectionc82c7bdfe576755b358a"
            />
            <CardItemgov
              src="images/pibgov.png"
              text=""
              label="PIB"
              path="https://app.powerbi.com/view?r=eyJrIjoiODhhZWY3YTktMmZjYi00YjcxLWJjNzUtZWY0ZmJkZGVhOGVmIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection5c7c140aa49299d9a545"
            />
          </ul>

          <ul className="cards__itemsgov">
            <CardItemgov
              src="images/agronegociogov.png"
              text=""
              label="Agronegócio"
              path="https://app.powerbi.com/view?r=eyJrIjoiOTNlOTIxZWYtMjlhYS00M2Y4LTlmNmYtNzM2MmY0NGFlYmJkIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
            />
            <CardItemgov
              src="images/saudegov.png"
              text=""
              label="Saúde"
              path="https://app.powerbi.com/view?r=eyJrIjoiMzZhYzA4MTMtZTNlZC00NGM4LTlmYmItMjQxMjM0OWU2Mzg4IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
            />
            <CardItemgov
              src="images/mulhergov.png"
              text=""
              label="Mulher"
              path="https://app.powerbi.com/view?r=eyJrIjoiN2ZhZDdlMmUtMTRlMS00Mjc4LWFjZDItYjZjNDVjOGRjMjEzIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
            />
          </ul>

          <ul className="cards__itemsgov">
            <CardItemgov
              src="images/populacaogov.png"
              text=""
              label="Populacao"
              path="https://app.powerbi.com/view?r=eyJrIjoiZjkzNTMyMzEtYWM0Mi00YjM1LWFlODMtMzMzMTY3MDFjOTZlIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
            />
            <CardItemgov
              src="images/esgotogov.png"
              text=""
              label="Esgoto"
              path="https://app.powerbi.com/view?r=eyJrIjoiZmVkOTU4NjQtNjczMC00ZjQzLWFjYWItMjUwYTc2N2NjMWQxIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
            />
            <CardItemgov
              src="images/negociosgov.png"
              text=""
              label="Comércio exterior"
              path="https://app.powerbi.com/view?r=eyJrIjoiZGEzOGNhZGItOTYwZS00ODBjLTk0MDQtYzg3M2E0NDkyNzJmIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
            />
          </ul>

          <ul className="cards__itemsgov">
            <CardItemgov
              src="images/agriculturafamiliargov.png"
              text=""
              label="Agricultura Familiar"
              path="https://app.powerbi.com/view?r=eyJrIjoiYjExYmEzYWMtYTE0OC00MzgxLWEwMWEtYzNmNTIxYzE5ODIyIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9"
            />
  
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardsGov;
