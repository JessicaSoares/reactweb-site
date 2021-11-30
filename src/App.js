import React from 'react';

import Navbar from './components/Navbar';

import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Agronegocio from './components/pages/Agronegocio';
import Orcamentarios from './components/pages/Orcamentarios';
import Social from './components/pages/Social';
import Saude from './components/pages/Saude';
import Transito from './components/pages/Transito';
import MeioAmbiente from './components/pages/MeioAmbiente';
import Infraestrutura from './components/pages/Infraestrutura';
import Empregos from './components/pages/Empregos';
import Educacao from './components/pages/Educacao';
import DesenvolvimentoHumano from './components/pages/DesenvolvimentoHumano';
import Economia from './components/pages/Economia';
import Pibbi from './components/pages/pagesBI/PIBBI';
import ComercialBI from './components/pages/pagesBI/ComercialBI';
import Graphs from './components/pages/pagesBI/Graphs';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/meioambiente' exact element={<MeioAmbiente />} />
          <Route path='/infraestrutura' exact element={<Infraestrutura />} />
          <Route path='/empregos' exact element={<Empregos />} />
          <Route path='/educacao' exact element={<Educacao />} />
          <Route path='/desenvolvimentohumano' exact element={<DesenvolvimentoHumano />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/agronegocio' element={<Agronegocio />} />
          <Route path='/Orcamentarios' element={<Orcamentarios />} />
          <Route path='/Saude' element={<Saude />} />
          <Route path='/Transito' element={<Transito />} />
          <Route path='/Social' element={<Social />} />
          <Route path='/economia' element={<Economia />} />
          <Route path='/PIBBI' element={<Pibbi />} />
          <Route path='/ComercialBI' element={<ComercialBI />} />
          <Route path='/graphs' element={<Graphs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
