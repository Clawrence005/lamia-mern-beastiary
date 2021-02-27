import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Beast from './pages/Beast';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/:beastId" component={Beast} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
