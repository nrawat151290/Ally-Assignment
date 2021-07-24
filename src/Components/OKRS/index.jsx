import React, { PureComponent } from 'react';
import { Accordion } from '../ComponentsRepository';
import PropTypes from 'prop-types';
import { OkrsContext } from '../../Utils/Contexts';
import { ALPHABETS } from '../../Utils/Constants';
import './index.css';

const OKRS = () => {
  function showDetails(data, event) {
    console.log(data);
  }
  const renderAccordionHead = (data = {}, position) => {
    return <h4 className="objective-title">
      <span className="objective-title__position">{position}.</span>
      <div onClick={showDetails.bind(this, data)} className="objective-title__text">
        {data.title.replace(/"/g, "")}
      </div>
    </h4>;
  }
  const renderAccordionContent = (data = {}) => {
    const { keyResults = [] } = data;
    if(!keyResults.length) {
      return (
        <h5>No key results to display</h5>
      )
    }
    return keyResults.map((keyResult, index) => {
      return (
        <div key={keyResult.id} className="key-result">
          <span className="key-result-pointer text-md">{ALPHABETS[index]}.</span>
          <div onClick={showDetails.bind(this, keyResult)} className="key-result-title text-sm">
            {keyResult.title.replace(/"/g, "")}
          </div>
        </div>
      )
    });
  }
  return (
    <OkrsContext.Consumer>
      {
        (okrs) => {
          return (
            <div className="okrs">
              <Accordion
                items={okrs}
                renderAccordionItemHead={renderAccordionHead}
                renderAccordionItemContent={renderAccordionContent}
              />
            </div>
          );
        }
      }
    </OkrsContext.Consumer>
  );
}

OKRS.propTypes = {
  okrs: PropTypes.arrayOf(PropTypes.shape())
};

export default OKRS