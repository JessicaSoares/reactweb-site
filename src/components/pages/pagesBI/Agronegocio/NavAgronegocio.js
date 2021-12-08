import "../graphs.css";
import "../BoxLegend.css";
import React, { useState, useEffect } from "react";
import NavSubItem from "../NavSubItem";

export default function NavAgronegocio() {

  return (
    
    <NavSubItem 
    link1 = "/producaoagricola"
    name1 = "Produção agrícola Municipal"
    link2 = "/centrodeabastecimento"
    name2 = "Agricultura Familiar"
    link3 = "/pecuaria"
    name3 = "Produção Pecuária Municipal"
    link4 = ""
    name4 = ""
    imageicon = "images/agronegocioIcon.png"
    subname = "Agronegócio"
    />
      ); 
    }
