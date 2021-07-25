import React from 'react';
import "./index.css";

const ScrollToTop = () => {
  const onClickHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <div onClick={onClickHandler} className="scroll-to-top">
      <span>&uarr;</span>
    </div>
  )
}

export default ScrollToTop;