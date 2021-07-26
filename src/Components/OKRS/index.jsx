import React from 'react';
import { Accordion } from '../ComponentsRepository';
import { MESSAGES } from '../../Utils/Constants';
import PropTypes from 'prop-types';
import './index.css';

const OKRS = (props) => {
  function showDetails(data) {
    const { showDetails = () => { } } = props;
    showDetails(data);
  }
  const renderAccordionHead = (data = {}, position) => {
    return (
      <h4 className="objective-title">
        <span className="objective-title__position">{position}.</span>
        <div onClick={showDetails.bind(this, data)} className="objective-title__text">
          {data.title}
        </div>
        <label className="category text-sm">{data.category}</label>
      </h4>
    );
  }
  const renderAccordionContent = (data = {}) => {
    const { keyResults = [] } = data;
    if (!keyResults.length) {
      return (
        <h5>{MESSAGES.NO_KEY_RESULTS}</h5>
      );
    }
    return (
      <ol>
        {
          keyResults.map((keyResult) => {
            return (
              <li key={keyResult.id} className="key-result">
                <div onClick={showDetails.bind(this, keyResult)} className="key-result-title text-md">
                  {keyResult.title}
                </div>
              </li>
            )
          })
        }
      </ol>
    )
  }
  const { wrapperClassName, okrs } = props;
  const wrapperClasses = `okrs ${wrapperClassName || ""}`;
  return (
    <section className={wrapperClasses}>
      <h2 className="okrs__heading">
        Objectives and Key Results ({okrs.length})
      </h2>
      <Accordion
        items={okrs}
        renderAccordionItemHead={renderAccordionHead}
        renderAccordionItemContent={renderAccordionContent}
      />
    </section>
  );
}


OKRS.propTypes = {
  wrapperClassName: PropTypes.string,
  showDetails: PropTypes.func,
  okrs: PropTypes.array.isRequired
}

export default OKRS