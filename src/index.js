import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import EditRow from './components/EditRow';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render
  (
    <BrowserRouter >
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/editRow/:id" component={EditRow} />
      </Switch>
    </BrowserRouter >,
    document.getElementById('root')
  );

