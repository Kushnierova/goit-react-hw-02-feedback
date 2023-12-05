import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Sections from './Sections/Sections';
import Notification from './Notification/Notification';
import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const feedback = event.target.name;
    this.setState(prevState => {
      return { [feedback]: prevState[feedback] + 1 };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    let percentage = Number((100 / this.countTotalFeedback()) * good).toFixed(
      0
    );
    return percentage;
  }

  render() {
    const options = Object.keys(this.state);
    return (
      <div className={css.formFeedback}>
        <Sections
          title="Please leave feedback"
          className={css.feedback}
          classNameTitle={css.feedbackTitle}
        >
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Sections>

        <Sections
          title="Statistics"
          className={css.statistics}
          classNameTitle={css.statisticsTitle}
        >
          {this.countTotalFeedback() ? (
            <Statistics
              options={options}
              values={Object.values(this.state)}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Sections>
      </div>
    );
  }
}
