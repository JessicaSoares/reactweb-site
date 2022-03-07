import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import { GlobalStyle } from "../../globalStyles";
import { lazy, Suspense } from "react";
const Homeo = lazy(() => import("../../estilo/Home"));


const ScrollToTop = lazy(() => import("../../components/ScrollToTop/index"));



function Home() {
  return (
    <>
          <Suspense fallback={null}>
        <GlobalStyle />
        <ScrollToTop />
        <Homeo /> 
      </Suspense>
      <Cards />
    </>
  );
}

export default Home;
