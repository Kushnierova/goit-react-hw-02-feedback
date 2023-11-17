import { Component } from 'react';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';
import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    const options = Object.keys(this.state);
    return (
      <ul className={css.formFeedback}>
        <li className={css.item}>
          <h2>Please leave feedback</h2>
          <Feedback options={options} />
        </li>
        <li className={css.item}>
          <h2>Statistics</h2>
          <Statistics options={options}/>
        </li>
      </ul>
    );
  }
}
