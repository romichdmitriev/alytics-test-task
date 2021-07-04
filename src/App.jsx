import React, { useState, useEffect } from 'react';

import Loader from './components/Loader/Loader';
import Table from './components/Table/Table';

import { tableData } from './tableData/tableData';

import './app.module.scss';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(tableData);
    setLoading(false);
  }, []);

  return loading ? <Loader /> : <Table data={data} setData={setData}></Table>;
};

export default App;
