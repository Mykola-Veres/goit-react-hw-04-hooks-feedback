import { useState } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Notification from '../Norification';

export const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const counterFeetback = option => {
    switch (option) {
      case "good":
        return setGood((prevGood) => prevGood + 1);
      case "neutral":
        return setNeutral((neutral) => neutral + 1);
      case "bad":
        return setBad((bad) => bad + 1);
      default:
        throw new Error();
    }
  };

  const countTotalFeedback = () => bad + good + neutral;

  const countPositiveFeedbackPercentage = () => {
    let countTotal = countTotalFeedback()
    // if (!countTotal) {countTotal = 1}
    return Math.round((good * 100) / countTotal)
  };

  const createArrayKeysState = () => ["good", "neutral", "bad"]  

    return (
      <>
        <Section title="Please laeve feetback">
          <FeedbackOptions
            options={createArrayKeysState()}
            onLeaveFeedback={counterFeetback}
          />
        </Section>

        {countTotalFeedback() ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    ); 
}
export default App;
