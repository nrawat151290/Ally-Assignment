import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Arrow = (props) => {
  const { wrapperClassName } = props;
  const wrapperClasses = `arrow-down ${wrapperClassName || ""}`
  return (
    <div className={wrapperClasses} />
  );
}

Arrow.propTypes = {
  wrapperClassName: PropTypes.string
}

export default Arrow;