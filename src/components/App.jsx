import React, { Component } from 'react';
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
      <>
        <h1>hello</h1>
        <Feedback />
      </>
    );
  }
}

export default App;
