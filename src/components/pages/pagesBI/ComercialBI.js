import React from 'react';
import './Bi.css';
import Iframe from 'react-iframe';
import Navbarteste from './Navbarteste';

export default function ComercialBI() {
    return <> <h1 className='sign-up'>Economia</h1>
     <Navbarteste/>
   <Iframe url="https://app.powerbi.com/view?r=eyJrIjoiOWI4ZjgyM2MtMTJjNC00YWM1LWExZmYtMjZlODVjOGYyZTQxIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9" 
            position="absolute"
            width="100%"
            id="myId"
            className="economia"
            height="100%"
            styles={{height: "25px"}}/>
            </>  
}


