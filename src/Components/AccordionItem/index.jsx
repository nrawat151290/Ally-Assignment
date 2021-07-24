import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Arrow } from '../ComponentsRepository';
import './index.css';

class AccordionItem extends PureComponent {
  state = {
    open: true
  }
  toggleHandler = () => {
    this.setState((prevState) => {
      return {
        open: !prevState.open
      };
    });
  }
  render() {
    let { head, children, dataAttrs = {}, wrapperClassName } = this.props;
    const { open } = this.state;
    const { "data-item": dataItem, ...restDataAttrs } = dataAttrs;
    const wrapperClasses = `accordion-item${open ? ' accordion-item--open' : ""} ${wrapperClassName || ""}`;
    const arrowClasses = `accordion-item-icon${open ? " accordion-item-icon--open" : ""}`;
    return (
      <div className={wrapperClasses}>
        <span data-item={dataItem} onClick={this.toggleHandler} className={arrowClasses}>
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
    );
  }
}

AccordionItem.propTypes = {
  children: PropTypes.node.isRequired,
  head: PropTypes.node.isRequired,
  dataAttrs: PropTypes.object,
  wrapperClassName: PropTypes.string
}

export default AccordionItem;