import React, { useEffect, useState } from 'react';

import styles from './SubHeaderItem.module.scss';

import arrow from './sort-arrow.svg';

const SubHeaderItem = ({ title, accessor, activeSortingField, sortColumn, setData, unsortedData }) => {
  const [isSorting, setSorting] = useState({
    up: false,
    down: false,
    default: true,
  });

  // для скрытия иконки сортировки при переходе на другой элемент
  useEffect(() => {
    if (accessor !== activeSortingField) {
      setSorting({
        up: false,
        down: false,
        default: true,
      });
    }
  }, [accessor, activeSortingField]);

  const sortColumnValues = accessor => {
    if (isSorting.default) {
      setSorting({
        up: true,
        down: false,
        default: false,
      });
      sortColumn(accessor, 'asc');
      return;
    }

    if (isSorting.up) {
      setSorting({
        up: false,
        down: true,
        default: false,
      });
      sortColumn(accessor, 'desc');
      return;
    }

    setSorting({
      up: false,
      down: false,
      default: true,
    });
    setData(unsortedData);
  };

  const getSortArrowClass = () => {
    if (isSorting.up) {
      return 'sortArrowUp';
    }

    if (isSorting.down) {
      return 'sortArrowDown';
    }

    return 'sortArrowHide';
  };

  return (
    <>
      <th className={styles.cell} scope="col" onClick={() => sortColumnValues(accessor)}>
        <span>{title}</span>
        <img
          className={activeSortingField === accessor ? styles[getSortArrowClass()] : styles.sortArrowHide}
          src={arrow}
          alt=""
        />
      </th>
    </>
  );
};

export default SubHeaderItem;
