import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PerfectScrollbar from "react-perfect-scrollbar";

import TotalRow from './TotalRow/TotalRow';
import ItemRow from './ItemRow/ItemRow';
import Loader from '../../Loader/Loader';

import { getTableData } from '../../../redux/thunk/getTableData';

import styles from './ItemsList.module.scss';

const ItemsList = () => {
  const data = useSelector(state => state.data);
  const loadingTableData = useSelector(state => state.isFetching);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTableData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  return loadingTableData ?
    <div className={styles.loaderWrapper}>
      <Loader />
    </div>
    :
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
};

export default ItemsList;
