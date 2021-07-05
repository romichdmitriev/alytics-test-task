import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import HomePage from './pages/Homepage/index';
import TablePage from "./pages/TablePage";

import './app.module.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/table' component={TablePage}/>

        <Redirect to='/'/>
      </Switch>
    </BrowserRouter>
  )
};

export default App;
