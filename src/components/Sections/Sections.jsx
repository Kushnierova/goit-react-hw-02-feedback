import PropTypes from 'prop-types';
import css from './Sections.module.css';

const Sections = ({ title, className, classNameTitle, children }) => {
  return (
    <section className={className}>
      <h2 className={classNameTitle}>{title}</h2>
      {children}
    </section>
  );
};

Sections.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  classNameTitle: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Sections;
