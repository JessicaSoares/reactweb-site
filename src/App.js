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
import PIB from './components/pages/pagesBI/Economia/PIB';
import ComercialBI from './components/pages/pagesBI/ComercialBI';
import Graphs from './components/pages/pagesBI/Graphs';
import BalancaComercial from './components/pages/pagesBI/Economia/BalancaComercial';
import ComercioIndustria from './components/pages/pagesBI/Economia/ComercioIndustria';
import ProdCentro from './components/pages/pagesBI/Agronegocio/ProdCentro';
import ProdMunicipal from './components/pages/pagesBI/Agronegocio/ProdMunicipal';
import ProdPecuaria from './components/pages/pagesBI/Agronegocio/ProdPecuaria';

import DespesaOrcamentaria from './components/pages/pagesBI/PaineisOrcamentarios/DespesaOrcamentaria';
import ReceitaOrcamentaria from './components/pages/pagesBI/PaineisOrcamentarios/ReceitaOrcamentaria';

import Docentes from './components/pages/pagesBI/Educacao/Docentes';
import EvasaoEscolar from './components/pages/pagesBI/Educacao/EvasaoEscolar';
import AprovacaoReprovacao from './components/pages/pagesBI/Educacao/AprovacaoReprovacao';
import RaioX from './components/pages/pagesBI/Educacao/RaioX';
import Matriculas from './components/pages/pagesBI/Educacao/Matriculas';
import Ideb from './components/pages/pagesBI/Educacao/Ideb';

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
          <Route path='/pib' element={<PIB />} />
          <Route path='/ComercialBI' element={<ComercialBI />} />
          <Route path='/graphs' element={<Graphs />} />

          <Route path='/balancacomercial' element={<BalancaComercial />} />
          <Route path='/comercioindustria' element={<ComercioIndustria />} />

          <Route path='/producaoagricola' element={<ProdMunicipal />} />
          <Route path='/centrodeabastecimento' element={<ProdCentro />} />
          <Route path='/pecuaria' element={<ProdPecuaria />} />

          <Route path='/despesaorcamentaria' element={<DespesaOrcamentaria />} />
          <Route path='/receitaorcamentaria' element={<ReceitaOrcamentaria />} />

          <Route path='/docentes' element={<Docentes />} />
          <Route path='/evasaoescolar' element={<EvasaoEscolar />} />
          <Route path='/aprovacaoereprovacao' element={<AprovacaoReprovacao />} />
          <Route path='/raiox' element={<RaioX />} />
          <Route path='/matriculas' element={<Matriculas />} />
          <Route path='/ideb' element={<Ideb />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
