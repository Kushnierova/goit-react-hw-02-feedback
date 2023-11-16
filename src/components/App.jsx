import { Component } from 'react';
import Feedback from './Feedback/Feedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    const options = Object.keys(this.state);
    return (
      <div>
        <Feedback options={options} onLeaveFeedback={this.handleFeedback} />
      </div>
    );
  }
}


