
import React, { useState, useEffect } from "react";
import NavSubItem from "../../pages/pagesBI/Economia/NavSubEconomia";



export default function NavMaps() {
  return (
    <>
        <NavSubItem 
      link1 = "/infraestruturamapas"
      name1 = "Infraestrutura"
      link2 = "/meioambientemapas"
      name2 = "Meio Ambiente"
      link3 = "/patrimoniomapas"
      name3 = "Patrimonio Público"
      link4 = "/turismomapas"
      name4 = "Turismo"

      link5 = "/receitas"
      name5 = "Urbanismo"
      imageicon = "images/map.png"
      subname = "Mapas Temáticos"
      />

          </>
  );
}