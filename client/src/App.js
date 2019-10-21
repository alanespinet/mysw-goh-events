import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home';
import P404 from './components/P404';

import './scss/styles.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={ true } component={ Home } />
          <Route component={ P404 } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
