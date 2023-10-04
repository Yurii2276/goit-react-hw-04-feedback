import React, { Component } from 'react';

import css from './FeedbackOptions.module.css';

export default class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className={css.btnBloc}>    
        {options.map((option) => (
           <button className={css.btn} key={option} name={option} onClick={onLeaveFeedback}>
           {option} 
           </button> 
        ))};
      </div>
    );
  }
}
