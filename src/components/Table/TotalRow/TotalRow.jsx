import React from 'react';
import { time } from 'uniqid';

import { TableDataAccessors } from '../TableDataAccessors';

import styles from '../Table.module.scss';

const TotalRow = ({ getTotalValueOfColumn }) => {
  return (
    <tr className={styles.totalRow}>
      <th className={styles.totalCell}>Итого</th>
      {TableDataAccessors.map(accessor => (
        <th key={time()} className={styles.totalCellValues}>
          {getTotalValueOfColumn(accessor.split('.'))}
        </th>
      ))}
    </tr>
  );
};

export default TotalRow;
