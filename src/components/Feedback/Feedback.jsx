import PropTypes from 'prop-types';
import css from './Feedback.module.css';

const Feedback = ({ options, onCountOption }) => {
  return (
    <ul className={css.list}>
      {options.map(option => (
        <li key={option} className={css.item}>
          <button
            type="submit"
            className={css.btn}
            onClick={onCountOption}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Feedback;
