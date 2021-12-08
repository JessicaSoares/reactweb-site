import "../graphs.css";
import "../BoxLegend.css";
import React, { useState, useEffect } from "react";
import NavSubItem from "../NavSubItem";

export default function NavEconomia() {

  return (
    
    <NavSubItem 
    link1 = "/balancacomercial"
    name1 = "Balança comercial"
    link2 = "/PIBBI"
    name2 = "PIB"
    link3 = "/comercioeindustria"
    name3 = "Comércio e industria"
    imageicon = "images/economy-icon.png"
    subname = "economia"
    />
      ); 
    }
