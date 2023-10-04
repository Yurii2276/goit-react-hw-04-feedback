import React, { Component } from 'react';

import css from './Statistic.module.css'

export default class Statistic extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div>
        <p className={css.resaltlist}>Good: {good}</p>
        <p className={css.resaltlist}>Neutral: {neutral}</p>
        <p className={css.resaltlist}>Bad: {bad}</p>
        <p className={css.resaltlist}>Total: {total}</p>
        <p className={css.resaltlist}>Positive feedback: {positivePercentage}%</p>
      </div>
    );
  }
}
