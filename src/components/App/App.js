import { Component } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Notification from '../Norification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  counterFeetback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { bad, good, neutral } = this.state;
    return bad + good + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    let countTotal = this.countTotalFeedback();
    if (!countTotal) {
      countTotal = 1;
    }
    return Math.round((this.state.good * 100) / countTotal);
  };

  createArrayKeysState = () => Object.keys(this.state);

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = this.countTotalFeedback();
    return (
      <>
        <Section title="Please laeve feetback">
          <FeedbackOptions
            options={this.createArrayKeysState()}
            onLeaveFeedback={this.counterFeetback}
          />
        </Section>

        {countTotalFeedback ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}
export default App;
