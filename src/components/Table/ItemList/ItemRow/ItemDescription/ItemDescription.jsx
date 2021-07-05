import React from 'react';

import styles from './ItemDescription.module.scss';

import expand from './expand.svg';
import close from './close.svg';

const ItemDescription = ({ icon, title, description, isHaveSubRows, expandRow, isExpanded }) => {
  return (
    <td>
      <div className={styles.wrapper}>
        {isHaveSubRows ? (
          <img className={styles.expandIcon} src={isExpanded ? close : expand} onClick={expandRow} alt="expand icon" />
        ) : (
          ''
        )}
        {icon && <img className={styles.icon} src={icon} alt="item icon" />}
        <div>
          {title && <p className={styles.title}>{title}</p>}
          {description && <p className={styles.description}>{description}</p>}
        </div>
      </div>
    </td>
  );
};

export default ItemDescription;
