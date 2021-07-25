import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Loader = (props) => {
  const { message = "Loading..." } = props;
  return (
    <div className="loader">
      <div className="loader-body">
        <div className="spinner" />
        {
          message &&
          <h2 className="loader__text">
            {message}
          </h2>
        }
      </div>
    </div>
  )
}

Loader.propTypes = {
  message: PropTypes.string
}


export default Loader;