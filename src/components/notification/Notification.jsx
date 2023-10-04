import React, { Component } from 'react';

import css from './Notification.module.css'

export default class Notification extends Component {
  render() {
    const { message } = this.props;
    return (
      <div>
        <p className={css.noStatTitle}>{message}</p>
      </div>
    );
  }
}
