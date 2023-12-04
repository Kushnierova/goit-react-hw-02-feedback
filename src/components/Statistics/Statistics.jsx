import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ options, values }) => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        {options[0]}:<span className={css.resultSpan}> {values[0]}</span>
      </li>
      <li className={css.item}>
        {options[1]}:<span className={css.resultSpan}> {values[1]}</span>
      </li>
      <li className={css.item}>
        {options[2]}:<span className={css.resultSpan}> {values[2]}</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Statistics;
