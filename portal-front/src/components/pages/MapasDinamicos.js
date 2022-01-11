import React from 'react';
import '../../App.css';
import Iframe from 'react-iframe';


export default function MapasDinamicos() {
  return (
<Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
            position="absolute"
            width="100%"
            id="myId"
            className="transito"
            height="100%"
            styles={{height: "25px"}}/>
  );
}

