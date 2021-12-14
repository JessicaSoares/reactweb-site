import "../graphs.css";
import "../BoxLegend.css";
import React, { useState, useEffect } from "react";
import NavSubItem from "./NavSubEconomia";

export default function NavEconomia() {

  return (
    
    <NavSubItem 
    link1 = "/balancacomercial"
    name1 = "Balança comercial"
    link2 = "/PIBBI"
    name2 = "PIB"
    link3 = "/comercioeindustria"
    name3 = "Comércio e industria"
    link4 = "/despesas"
    name4 = "Despesas"
    link5 = "/receitas"
    name5 = "Receitas"
    imageicon = "images/economy-icon.png"
    subname = "economia"
    />
      ); 
    }
