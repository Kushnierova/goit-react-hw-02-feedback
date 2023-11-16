import PropTypes from 'prop-types';
import css from './Feedback.css';

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <ul className="btnList">
      {options.map(option => (
        <li key={option}>
          <button type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;
