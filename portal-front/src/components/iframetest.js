import React from "react";
import "./HeroSection.css";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

function Iframetest() {
  return (
    <div className="App">
    <AliceCarousel autoPlay autoPlayInterval="2000">
     <img src={'images/DJI_001.jpg'} className="sliderimg" alt=""/>
     <img src={'images/DJI_0142.jpg'} className="sliderimg" alt=""/>
     <img src={'images/DJI_0165.jpg'} className="sliderimg" alt=""/>
   </AliceCarousel>
   </div>
  );
}

export default Iframetest;