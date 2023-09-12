import { Component } from 'react';
import css from './App.module.css';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';

class App extends Component {

  state = {
    good:0,
    neutral:0,
    bad:0
  }

  onLeaveFeedback = name => {
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = (good, neutral, bad) => good + neutral + bad;

  countPositiveFeedbackPercentage = (good, total) => {
    return total > 0 ? Math.round(good * 100 / total) : 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(good, neutral, bad);
    return (
      <main className={css.main}>
        <h1 hidden>React homework 2</h1>

        <Section title='Please leave feedback'>
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>

        <Section title='Statistics'>
          {
            total === 0 ?
              <Notification message='There is no feedback'></Notification> :
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={this.countPositiveFeedbackPercentage(good, total)}
              />
          }
        </Section>
      </main>
    );
  }
};

export default App;