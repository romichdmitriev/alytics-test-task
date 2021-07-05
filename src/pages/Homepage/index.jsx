import React from 'react';
import { Link } from 'react-router-dom';

import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <Link to='/table' className={styles.slidingButton}>
        Открыть таблицу
      </Link>
    </div>
  )
}

export default HomePage;
