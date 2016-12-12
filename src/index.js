import React from 'react';
import ReactDOM from 'react-dom';
import Layout, {Buys, Sales, Settings} from './pages/index';
import {Router, Route, IndexRoute,  browserHistory } from 'react-router';



ReactDOM.render(
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Buys}></IndexRoute>
          <Route path="buys" component={Buys}></Route>
          <Route path="sales" component={Sales}></Route>
          <Route path="settings" component={Settings}></Route>
        </Route>
      </Router>,
  document.getElementById('root')
);
