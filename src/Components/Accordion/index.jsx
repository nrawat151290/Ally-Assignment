import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { AccordionItem } from '../ComponentsRepository';
import './index.css';

/*
- Methods renderAccordionItemHead and renderAccordionItemContent are generic renderers.
- Maintained by component/container which uses Accordion component.
- This enables the capability to render any content required rather than hardcoding the markup within Accordion.
*/

/* Keeping it as class component so that it doesn't completely unmount/mount when new props(data) are received */
class Accordion extends PureComponent {
  render() {
    const {
      dataAttrs = {},
      items = [],
      renderAccordionItemHead = () => { return null; },
      renderAccordionItemContent = () => { return null; },
      wrapperClassName
    } = this.props;
    const wrapperClasses = `accordion ${wrapperClassName || ""}`;
    if (!items.length) {
      return null;
    }
    return (
      <div className={wrapperClasses} {...dataAttrs}>
        {
          items.map((item, index) => {
            return (
              <AccordionItem
                key={item.id}
                dataAttrs={{
                  "data-item": item.id
                }}
                head={renderAccordionItemHead(item, index + 1)}
              >
                {renderAccordionItemContent(item)}
              </AccordionItem>
            );
          })
        }
      </div>
    )
  }
}

Accordion.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    archived: PropTypes.string,
    category: PropTypes.string,
    id: PropTypes.string,
    metric_name: PropTypes.string,
    metric_start: PropTypes.string,
    metric_target: PropTypes.string,
    keyResults: PropTypes.array.isRequired,
    parent_objective_id: PropTypes.string,
    title: PropTypes.string
  })),
  dataAttrs: PropTypes.object,
  renderAccordionItemHead: PropTypes.func.isRequired,
  renderAccordionItemContent: PropTypes.func.isRequired,
  wrapperClassName: PropTypes.string
}

export default Accordion;