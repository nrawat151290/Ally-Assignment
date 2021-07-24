import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { AccordionItem } from '../ComponentsRepository';
import './index.css';

class Accordion extends PureComponent {
  state = {
    activeAccordionItems: []
  }
  toggleHandler = (selected) => {
    const { activeAccordionItems } = this.state;
    const updatedSelections = [...activeAccordionItems];
    if (activeAccordionItems.includes(selected)) {
      updatedSelections.splice(activeAccordionItems.indexOf(selected), 1);
    } else {
      updatedSelections.push(selected);
    }
    this.setState({
      activeAccordionItems: updatedSelections
    });
  }
  render() {
    const {
      dataAttrs = {},
      items = [],
      renderAccordionItemHead = () => { },
      renderAccordionItemContent = () => { }
    } = this.props;
    const { activeAccordionItems } = this.state;
    return (
      <div className="accordion" {...dataAttrs}>
        {
          items.map((item, index) => {
            return (
              <AccordionItem
                key={item.id}
                open={activeAccordionItems.includes(item.id)}
                dataAttrs={{
                  "data-item": item.id
                }}
                onToggle={this.toggleHandler}
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
}

export default Accordion;