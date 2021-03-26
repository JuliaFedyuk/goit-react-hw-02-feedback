import PropTypes from 'prop-types';
import styles from './Info.module.css';

const Info = ({ text }) => {
  return (
    <>
      <p className={styles.text}>{text}</p>
    </>
  );
};

Info.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Info;
