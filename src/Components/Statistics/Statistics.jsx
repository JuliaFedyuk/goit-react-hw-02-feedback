import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, Total, Percentage }) => (
  <div className={styles.statistics_wrapper}>
    <div className={styles.votes}>
      <p className={styles.statistics_item}>Good:{good}</p>
      <p className={styles.statistics_item}>Neutral:{neutral}</p>
      <p className={styles.statistics_item}>Bad:{bad}</p>
    </div>
    <div className={styles.total}>
      <p className={styles.statistics_total}>Total:{Total}</p>
      <p className={styles.statistics_total}>
        Positive feedback:{Percentage} %
      </p>
    </div>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  Total: PropTypes.number.isRequired,
  Percentage: PropTypes.number.isRequired,
};

export default Statistics;
