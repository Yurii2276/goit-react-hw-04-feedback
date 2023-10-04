import { useState } from 'react';

import css from './App.module.css';

import Statistic from './statistic/Statistic';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Section from './section/Section';
import Notification from './notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const handleBtnClick = event => {
    const optionName = event.target.name;
    switch (optionName) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        console.warn(`Unknown option: ${optionName}`);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div className={css.container}>
      <Section title="Feedback Options">
        <FeedbackOptions options={options} onLeaveFeedback={handleBtnClick} />
      </Section>

      <Section title="Statistic">
        {totalFeedback > 0 ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
