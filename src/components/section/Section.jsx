import React, { Component } from 'react';

import css from './Section.module.css'

export default class Section extends Component {
  render() {

    const { title, children } = this.props;

    return (
      <section>
      <h2 className={css.sectinTitle}>{title}</h2>
      {children}
    </section>
  );
  }
}
