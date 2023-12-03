import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ options }) => {
  return (
    <ul className={css.list}>
      {options.map(option => (
        <li key={option} className={css.item}>
          <p className={css.optionName}>
            {option} : <span className={css.resultSpan}>0</span>
          </p>
        </li>
      ))}
    </ul>
  );
};

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default Statistics;
