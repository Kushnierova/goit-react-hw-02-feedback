import React from 'react';
import css from './Feedback.css';

const Feedback = ({ options, onLeaveFeedback }) => {
  <ul className="btnList">
    {options.map(option => (
      <li key={option}>
        <button type="button" onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      </li>
    ))}
  </ul>;
};

export default Feedback;
