import React from 'react';
import { Link } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useSelector } from 'react-redux';

import SubHeader from './SubHeader/SubHeader';
import ItemRow from './ItemRow/ItemRow';
import PrimaryHeader from './PrimaryHeader/PrimaryHeader';
import TotalRow from './TotalRow/TotalRow';

import styles from './Table.module.scss';
import 'react-perfect-scrollbar/dist/css/styles.css';

const Table = () => {
  const data = useSelector(state => state.data);

  const getTotalValueOfColumn = ([branch, property]) => {
    const total = +getTargetCellValue({ data, branch, property }).toFixed(2);
    return Number.isNaN(total) ? '-' : total;
  };

  const getTargetCellValue = ({ data, branch, property }) => {
    return data?.reduce((sum, item) => {
      if (Number.isNaN(+item[branch][property])) {
        return 0 + sum;
      }

      if (!item[branch][property]) {
        return 0 + sum;
      }

      return sum + +item[branch][property];
    }, 0);
  };

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

      <PerfectScrollbar>
        <div className={styles.scrollableBar}>
          <table className={styles.table} rules="groups">
            <colgroup className={styles.group} width="270"></colgroup>
            <colgroup span="6" className={styles.group} width="150"></colgroup>
            <colgroup span="3" className={styles.group} width="120"></colgroup>
            <colgroup span="3" className={styles.group}></colgroup>

            <tbody>
              <TotalRow getTotalValueOfColumn={getTotalValueOfColumn} />

              {data.map(item => (
                <ItemRow key={item.id} id={item.id} item={item} getTargetCellValue={getTargetCellValue} />
              ))}
            </tbody>
          </table>
        </div>
      </PerfectScrollbar>
    </div>
  );
};

export default Table;
