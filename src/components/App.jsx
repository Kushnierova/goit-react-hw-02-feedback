import { Component } from 'react';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';
import css from './App.module.css';

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad:0,
  };

  onCountFeedback = event => {
    const feedback = event.target.name;
    this.setState(prevState => {
      return { [feedback]: prevState[feedback] + 1 };
    });
  };

  render() {
    const options = Object.keys(this.state);
    return (
      <div className={css.formFeedback}>
        <div className={css.feedback}>
          <h2 className={css.feedbackTitle}>Please leave feedback</h2>
          <Feedback options={options} onCountFeedback={this.onCountFeedback} />
        </div>
        <div className={css.statistics}>
          <h2 className={css.statisticsTitle}>Statistics</h2>
          <Statistics options={options} values={Object.values(this.state)} />
        </div>
      </div>
    );
  }
}
