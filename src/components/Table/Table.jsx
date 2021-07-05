import React from 'react';
import { Link } from 'react-router-dom';

import SubHeader from './SubHeader/SubHeader';
import PrimaryHeader from './PrimaryHeader/PrimaryHeader';
import ItemsList from "./ItemList/ItemsList";

import styles from './Table.module.scss';
import 'react-perfect-scrollbar/dist/css/styles.css';

const Table = () => {
  return (
    <div className={styles.tableWrapper}>
      <Link to="/" className={styles.slidingQuit} />

      <table className={styles.table} rules="groups">
        <colgroup className={styles.group} width="270"></colgroup>
        <colgroup span="6" className={styles.group} width="150"></colgroup>
        <colgroup span="3" className={styles.group} width="120"></colgroup>
        <colgroup span="3" className={styles.group}></colgroup>

        <thead>
          <PrimaryHeader />

          <SubHeader />
        </thead>
      </table>

      <ItemsList></ItemsList>
    </div>
  );
};

export default Table;
