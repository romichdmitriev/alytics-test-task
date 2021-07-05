import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Loader from './components/Loader/Loader';
import Table from './components/Table/Table';
import HomePage from './pages/Homepage/index';

import { tableData } from './tableData/tableData';

import './app.module.scss';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(tableData);
    setLoading(false);
  }, []);

  return loading ?
    <Loader />
    :
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/table'>
          <Table data={data} setData={setData}/>
        </Route>
      </Switch>
    </BrowserRouter>
};

export default App;
