import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sort } from 'fast-sort';

import SubHeaderItem from './SubHeaderItem/SubHeaderItem';

import { sortTableData, setSortingType } from '../../../redux/actions/tableDataActions';
import { subHeaderRenderData } from './SubHeaderRenderData';

import styles from './SubHeader.module.scss';

const SubHeader = () => {
  const dispatch = useDispatch();
  const unsortedData = useSelector(state => state.unsortedData);

  const sortTitleColumn = ({ copiedData, branch, sortingDirection }) => {
    const dataWithSortedSubRows = copiedData.reduce((sum, current) => {
      const sortedSubRows = sort(current.subRows)[sortingDirection](subRow => subRow[branch]);
      sum.push({
        ...current,
        subRows: [...sortedSubRows],
      });

      return sum;
    }, []);

    return sort(dataWithSortedSubRows)[sortingDirection](row => row[branch]);
  };

  const sortColumn = (accessor, sortingDirection) => {
    dispatch(setSortingType(accessor));

    const [branch, property] = accessor?.split('.');
    const copiedData = [...unsortedData];

    if (!sortingDirection) {
      console.log(1);
      dispatch(sortTableData(copiedData));
      return;
    }

    if (!property) {
      const sortedData = sortTitleColumn({
        copiedData,
        branch,
        sortingDirection,
      });

      dispatch(sortTableData(sortedData));
      return;
    }

    const dataWithSortedSubRows = copiedData.reduce((sum, current) => {
      const sortedSubRows = sort(current.subRows)[sortingDirection](subRow => +subRow[branch][property]);
      sum.push({
        ...current,
        subRows: [...sortedSubRows],
      });

      return sum;
    }, []);

    const sortedData = sort(dataWithSortedSubRows)[sortingDirection](row => +row[branch][property]);

    dispatch(sortTableData(sortedData));
  };

  return (
    <tr className={styles.cellsHeader}>
      {subHeaderRenderData.map(item => {
        return item.cells.map(cell => (
          <SubHeaderItem key={cell.id} title={cell.title} accessor={cell.accessor} sortColumn={sortColumn} />
        ));
      })}
    </tr>
  );
};

export default SubHeader;
