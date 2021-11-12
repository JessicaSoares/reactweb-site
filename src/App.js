import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Agronegocio from './components/pages/Agronegocio';
import Economia from './components/pages/Economia';
import Pibbi from './components/pages/pagesBI/PIBBI';
import ComercialBI from './components/pages/pagesBI/ComercialBI';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/agronegocio' component={Agronegocio} />
          <Route path='/economia' component={Economia} />
          <Route path='/PIBBI' component={Pibbi} />
          <Route path='/ComercialBI' component={ComercialBI} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
