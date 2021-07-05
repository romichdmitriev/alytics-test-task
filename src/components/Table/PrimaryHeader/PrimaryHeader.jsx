import React from 'react';

import styles from './PrimaryHeader.module.scss';

import settings from './settings.svg';
import question from './question.svg';
import crm from './crm.png';
import model from './model_linear.png';
import wheels from './wheels.png';
import squares from './squares.png';

const PrimaryHeader = () => {
  return (
    <tr className={styles.primaryHeader}>
      <th className={styles.primaryHeaderCell} colSpan="1">
        Источники трафика
      </th>

      <th className={styles.primaryHeaderCell} colSpan="6">
        Трафик
        <div className={styles.primaryHeaderFunctions}>
          <img className={styles.functionsIcon} src={settings} alt="settings" />
          <img className={styles.functionsIcon} src={question} alt="question" />
        </div>
      </th>

      <th className={styles.primaryHeaderCell} colSpan="3" role="columnheader">
        <div className={styles.headerTitle}>
          <img className={styles.headerIcon} src={crm} alt="icon" />
          <p>Продажи</p>
        </div>

        <div className={styles.headerTitle}>
          <img className={styles.headerIcon} src={model} alt="icon" />
          <p className={styles.subtitle}>Линейная модель</p>
        </div>

        <div className={styles.primaryHeaderFunctions}>
          <img className={styles.functionsIcon} src={settings} alt="settings" />
          <img className={styles.functionsIcon} src={question} alt="question" />
        </div>
      </th>

      <th className={styles.primaryHeaderCell} colSpan="3" role="columnheader">
        <div className={styles.headerTitle}>
          <img className={styles.headerIcon} src={wheels} alt="icon" />
          <p>Цель с осн. GA</p>
        </div>

        <div className={styles.headerTitle}>
          <img className={styles.headerIcon} src={squares} alt="icon" />
          <p className={styles.subtitle}>Составная цель</p>
        </div>

        <div className={styles.primaryHeaderFunctions}>
          <img className={styles.functionsIcon} src={settings} alt="settings" />
          <img className={styles.functionsIcon} src={question} alt="question" />
        </div>
      </th>
    </tr>
  );
};

export default PrimaryHeader;
