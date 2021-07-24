import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import './index.css';

/* Made this as class component as we want to hook into the lifecycle methods to give execute certain callbacks */
class Modal extends PureComponent {
  componentDidMount() {
    const { onShow = () => { } } = this.props;
    onShow();
  }
  componentWillUnmount() {
    const { onHide = () => { } } = this.props;
    onHide();
  }
  closeModal = (event) => {
    event.stopPropagation();
    const { closeModal = () => { } } = this.props;
    closeModal();
  }
  clickOutsideToClose = (event) => {
    const { clickOutsideToClose = true } = this.props;
    if (clickOutsideToClose) {
      this.closeModal(event);
    }
  }
  render() {
    const {
      children,
      wrapperClassName,
      parentElem = document.body,
      open = false,
      header
    } = this.props;
    if (!children || !open) {
      return null;
    }
    const wrapperClasses = `modal-container ${wrapperClassName || ""}`;
    const portalContent = (
      <div className={wrapperClasses}>
        <div className="modal-overlay" onClick={this.clickOutsideToClose} />
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-header-content">{header}</div>
            <span onClick={this.closeModal} className="close-icon">✕</span>
          </div>
          <div className="modal-body">
            {children}
          </div>
        </div>
      </div >
    );
    return createPortal(portalContent, parentElem);
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
  clickOutsideToClose: PropTypes.bool,
  wrapperClassName: PropTypes.string,
  onShow: PropTypes.func,
  onHide: PropTypes.func,
  closeModal: PropTypes.func.isRequired,
  parentElem: PropTypes.node,
  open: PropTypes.bool.isRequired
}

export default Modal;