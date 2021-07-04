import React, { useState } from 'react';
import { time } from 'uniqid';

import ItemDescription from './ItemDescription/ItemDescription';

import { TableDataAccessors } from '../TableDataAccessors';

import styles from './ItemRow.module.scss';

const ItemRow = ({ item, id }) => {
  const [isExpanded, setExpanded] = useState(false);

  const expandRow = () => {
    setExpanded(!isExpanded);
  };

  return (
    <>
      <tr className={!isExpanded ? styles.itemRow : styles.itemRowSelected}>
        <ItemDescription
          key={time() + id}
          isHaveSubRows={item.subRows.length > 0}
          isExpanded={isExpanded}
          title={item.title}
          description={item.description}
          icon={item.icon}
          expandRow={expandRow}
        />

        {TableDataAccessors.map(accessor => {
          const [branch, value] = accessor.split('.');
          return <td key={time() + id}>{!item[branch][value] ? '-' : item[branch][value]}</td>;
        })}
      </tr>

      {isExpanded &&
        item.subRows.map((element, index) => {
          return (
            <tr className={!isExpanded ? styles.itemRow : styles.itemRowSelected}>
              <ItemDescription
                key={time() + id}
                title={element.title}
                description={element.description}
                icon={element.icon}
              />

              {TableDataAccessors.map(accessor => {
                const [branch, value] = accessor.split('.');
                return <td key={time() + id}>{!element[branch][value] ? '-' : element[branch][value]}</td>;
              })}
            </tr>
          );
        })}
    </>
  );
};

export default ItemRow;
