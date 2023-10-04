import React from 'react';

import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(option => (
        <button
          className={css.btn}
          key={option}
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
