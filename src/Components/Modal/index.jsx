import React from 'react';

const Modal = (props) => {
  const { children } = props;
  if (!children) {
    return null;
  }
  return (
    <div className="modal">
      {children}
    </div>
  )
}

export default Modal;