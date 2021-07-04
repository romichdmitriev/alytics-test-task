import React, { useRef } from 'react';

import SubHeaderItem from './SubHeaderItem/SubHeaderItem';

import { subHeaderRenderData } from './SubHeaderRenderData';

import styles from './SubHeader.module.scss';

const SubHeader = ({ sortColumn, data, setData, activeSortingField }) => {
  const unsortedData = useRef(data);

  return (
    <tr className={styles.cellsHeader}>
      {subHeaderRenderData.map(item => {
        return item.cells.map(cell => (
          <SubHeaderItem
            key={cell.id}
            title={cell.title}
            accessor={cell.accessor}
            sortColumn={sortColumn}
            setData={setData}
            unsortedData={unsortedData.current}
            activeSortingField={activeSortingField}
          />
        ));
      })}
    </tr>
  );
};

export default SubHeader;
