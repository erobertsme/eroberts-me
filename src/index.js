import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Main from './pages/Main'
import Bio from './pages/Bio'
import Tips from './pages/Tips'
import NotFound from './pages/NotFound'

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/bio" component={Bio} />
      <Route exact path="/tips-and-tricks" component={Tips} />
      <Route component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
