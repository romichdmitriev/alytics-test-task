import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { getTableData } from "./redux/thunk/getTableData";

import Loader from './components/Loader/Loader';
import HomePage from './pages/Homepage/index';
import TablePage from "./pages/TablePage";

import './app.module.scss';

const App = () => {
  const dispatch = useDispatch();
  const loadingTableData = useSelector(state => state.isFetching);

  useEffect(() => {
    dispatch(getTableData());
  }, []);

  return loadingTableData ?
    <Loader />
    :
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/table' component={TablePage}/>

        <Redirect to='/'/>
      </Switch>
    </BrowserRouter>
};

export default App;
