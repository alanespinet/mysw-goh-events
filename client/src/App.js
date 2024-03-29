import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Home from './components/Home';
import Tags from './components/Tags';
import Rarities from './components/Rarities';
import P404 from './components/P404';

import './scss/styles.scss';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

const App = () => {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={ true } component={ Home } />
            <Route path="/tags" component={ Tags } />
            <Route path="/rarities" component={ Rarities } />
            <Route component={ P404 } />
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
