import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = (props) => {
  const { label, onChange = () => { }, ...restProps } = props;
  const onChangeHandler = (event) => {
    onChange(props.value, event.target.checked, event);
  }
  return (
    <div className="checkbox-container">
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
  value: PropTypes.string.isRequired
}

export default Checkbox;