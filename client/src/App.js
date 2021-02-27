import React from 'react';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Beast from './pages/Beast';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {

  return (<>

    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/:beastId" component={Beast} />
      </Switch>
    </BrowserRouter>
    <Footer />
  </>
  );
}

export default App;
