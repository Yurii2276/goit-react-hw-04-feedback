import { Component } from 'react';

import css from './App.module.css'

import Statistic from './statistic/Statistic';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Section from './section/Section';
import Notification from './notification/Notification';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = event => {
    const name = event.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };


  render() {
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    const options = ['good', 'neutral', 'bad']; 

    return (
      <div className={css.container}>
    
        <Section title="Feedback Options">
        <FeedbackOptions options={options} onLeaveFeedback={this.handleBtnClick}/>
        </Section>

        <Section title="Statistic">
          {totalFeedback > 0 ? (
            <Statistic
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />) : 
        (<Notification message='There is no feedback'/>)}
            
        </Section>
          
          

      </div>
    );
  }
}




