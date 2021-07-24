import React from 'react';
import './index.css';

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-body">
        <div className="spinner" />
        <h3 className="loader__text">
          Sit back and relax... OKRs are on their way...
        </h3>
      </div>
    </div>
  )
}


export default Loader;