import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Checkbox = (props) => {
  const { label, onChange = () => { }, wrapperClassName, ...restProps } = props;
  const onChangeHandler = (event) => {
    onChange(props.value, event.target.checked, event);
  }
  const wrapperClasses = `checkbox-container ${wrapperClassName || ""}`;
  return (
    <div className={wrapperClasses}>
      <input
        type="checkbox"
        onChange={onChangeHandler}
        {...restProps}
      />
      {
        label &&
        <label className="checkbox-label">{label}</label>
      }
    </div>
  )
}

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  wrapperClassName: PropTypes.string
}

export default Checkbox;