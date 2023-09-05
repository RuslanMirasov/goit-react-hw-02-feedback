import React from "react";
import css from './App.module.css';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';

export class App extends React.Component{

  static defaultProps = {
    initGood: 0,
    initNeutral: 0,
    initBad: 0,
  }

  state = {
    good: this.props.initGood,
    neutral: this.props.initNeutral,
    bad: this.props.initBad
  }

  handlerFeedback = (event) => {
    switch (event.target.innerText) {
      case 'GOOD':
        this.setState(prevState => ({
            good: prevState.good + 1
        }));
        break;
      case 'NEUTRAL':
        this.setState(prevState => ({
            neutral: prevState.neutral + 1
        }));
        break;
      default:
        this.setState(prevState => ({
            bad: prevState.bad + 1
        }));
    }
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() > 0 ? Math.round(this.state.good * 100 / (this.state.good + this.state.neutral + this.state.bad)) : 0;
  }

  render() {
    return (
      <main className={css.main}>
        <h1 hidden>React homework 2</h1>

        <Section title='Please leave feedback'>
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handlerFeedback} />
        </Section>

        <Section title='Statistics'>
          {
            this.countTotalFeedback() === 0 ?
              <Notification message='There is no feedback'></Notification> :
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
          }
        </Section>

      </main>
    );
  }





};
