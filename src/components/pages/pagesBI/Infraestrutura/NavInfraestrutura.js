import "../graphs.css";
import "../BoxLegend.css";
import React, { useState, useEffect } from "react";
import NavSubItem from "../NavSubItem";

export default function NavInfraestrutura() {

  return (
    
    <NavSubItem 
    link1 = "/agua"
    name1 = "Agua"
    link2 = "/esgoto"
    name2 = "Esgoto"
    link3 = "/ilumincao"
    name3 = "Iluminação Pública"
    link4 = ""
    name4 = ""
    />
      ); 
    }
