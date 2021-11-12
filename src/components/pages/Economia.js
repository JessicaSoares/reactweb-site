import React from 'react';
import '../../App.css';
import Iframe from 'react-iframe';
import Navbarteste from './pagesBI/Navbarteste';

export default function Economia() {
    return <> <h1 className='sign-up'>Economia</h1>
     <Navbarteste/>
     <div>
   <Iframe url="https://app.powerbi.com/view?r=eyJrIjoiNzBhNDFjNzEtMmEyMy00NDY0LWIzYjctZjYwNjkwZWJiMzlmIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9" 
            position="absolute"
            width="100%"
            id="myId"
            className="economia"
            height="10%"
            styles={{height: "25px"}}/>
        </div>
        <div>
    <Iframe url="https://app.powerbi.com/view?r=eyJrIjoiNzBhNDFjNzEtMmEyMy00NDY0LWIzYjctZjYwNjkwZWJiMzlmIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9" 
            position="absolute"
            width="100%"
            id="myId"
            className="economia"
            height="10%"
            styles={{height: "25px"}}/></div>
            </>  
}


