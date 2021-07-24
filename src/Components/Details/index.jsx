import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../ComponentsRepository';
import './index.css';

const Details = (props) => {
  const renderHeader = () => {
    const { data } = props;
    if (!data) {
      return null;
    }
    return (
      <h3 className="details-header">
        {data.title}
      </h3>
    );
  }

  const renderDetails = () => {
    const { data } = props;
    if (!data) {
      return null;
    }
    return (
      <ul>
        {
          Object.keys(data).map((key) => {
            if (typeof data[key] === "object" || !data[key]) {
              return null;
            }
            return (
              <li className="objective-details text-md" key={key}>
                <span className="objective-details__label">{key.split("_").join(" ")}</span>
                <span className="objective-details__value">{data[key]}</span>
              </li>
            );
          })
        }
      </ul>
    )
  }

  const closeModal = () => {
    const { onDetailsHide = () => { } } = props;
    onDetailsHide();
  }

  const { wrapperClassName } = props;
  const wrapperClasses = `details ${wrapperClassName || ""}`;
  return (
    <div className={wrapperClasses}>
      <Modal
        clickOutsideToClose={true}
        open={true}
        closeModal={closeModal}
        header={renderHeader()}
      >
        {renderDetails()}
      </Modal>
    </div>
  );
}

Details.propTypes = {
  wrapperClassName: PropTypes.string,
  data: PropTypes.object,
  onDetailsHide: PropTypes.func
}

export default Details;