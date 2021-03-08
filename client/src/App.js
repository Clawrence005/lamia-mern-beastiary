import React from 'react';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AllBeastsPage from './pages/AllBeastsPage';
import MapPage from './pages/MapPage';
import BeastPage from './pages/BeastPage';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {

  return (<>
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/allbeasts" component={AllBeastsPage} />
        <Route path="/map" component={MapPage} />
        <Route path="/beasts/:beastId" component={BeastPage} />

      </Switch>
    </BrowserRouter>
    <Footer />
  </>
  );
}

export default App;
