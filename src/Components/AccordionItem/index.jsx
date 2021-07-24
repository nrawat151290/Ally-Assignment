import React from 'react';
import PropTypes from 'prop-types';
import { Arrow } from '../ComponentsRepository';
import './index.css';

const AccordionItem = (props) => {
  const { head, children, onToggle = () => { }, dataAttrs = {}, open = false, wrapperClassName } = props;
  const { "data-item": dataItem, ...restDataAttrs } = dataAttrs
  const toggleHandler = (event) => {
    onToggle(event.currentTarget.getAttribute('data-item'));
  }
  const wrapperClasses = `accordion-item${open ? ' accordion-item--open' : ""} ${wrapperClassName || ""}`;
  const arrowClasses = `accordion-item-icon${open ? " accordion-item-icon--open" : ""}`;
  return (
    <div className={wrapperClasses}>
      <span data-item={dataItem} onClick={toggleHandler} className={arrowClasses}>
        <Arrow />
      </span>
      <div className="accordion-item-body">
        <div {...restDataAttrs} className="accordion-item-head">
          {head}
        </div>
        <div className="accordion-item-content">
          {children}
        </div>
      </div>
    </div>
  )
}

AccordionItem.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  head: PropTypes.node.isRequired,
  onToggle: PropTypes.func.isRequired,
  dataAttrs: PropTypes.object,
  wrapperClassName: PropTypes.string
}

export default AccordionItem;