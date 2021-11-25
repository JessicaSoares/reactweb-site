import React from 'react';

import Navbar from './components/Navbar';

import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/meioambiente' exact component={MeioAmbiente} />
          <Route path='/infraestrutura' exact component={Infraestrutura} />
          <Route path='/empregos' exact component={Empregos} />
          <Route path='/educacao' exact component={Educacao} />
          <Route path='/desenvolvimentohumano' exact component={DesenvolvimentoHumano} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/agronegocio' component={Agronegocio} />
          <Route path='/Orcamentarios' component={Orcamentarios} />
          <Route path='/Saude' component={Saude} />
          <Route path='/Transito' component={Transito} />
          <Route path='/Social' component={Social} />
          <Route path='/economia' component={Economia} />
          <Route path='/PIBBI' component={Pibbi} />
          <Route path='/ComercialBI' component={ComercialBI} />
          <Route path='/graphs' component={Graphs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
