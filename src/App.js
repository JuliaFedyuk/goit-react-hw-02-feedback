import { Component } from 'react';
import Statistics from './Components/Statistics/Statistics.jsx';
import Section from './Components/Section/Section';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import Info from './Components/Info/Info';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const feedbackName = event.target.name;
    this.setState(prevState => ({
      [feedbackName]: prevState[feedbackName] + 1,
    }));
  };

  countTotalFeedback = () => {
    const totalVotes = this.state.good + this.state.neutral + this.state.bad;
    return totalVotes;
  };

  countPositiveFeedbackPercentage = () => {
    const totalVotes = this.countTotalFeedback();
    const goodVotes = this.state.good;
    const feedbackPercentage = (goodVotes * 100) / totalVotes;
    return Math.round(feedbackPercentage);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    const keys = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={keys}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {total === 0 ? (
          <Info text="No feedback given" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              Total={total}
              Percentage={percentage}
            />
          </Section>
        )}
      </>
    );
  }
}
