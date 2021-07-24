import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '../ComponentsRepository';
import './index.css';

class Filter extends PureComponent {
  constructor() {
    super();
    this.selectedValues = [];
  }
  onChangeHandler = (selectedFilter, isChecked, event) => {
    const { onSelection = () => { } } = this.props;
    if (isChecked) {
      this.selectedValues.push(selectedFilter);
    } else {
      this.selectedValues.splice(this.selectedValues.indexOf(selectedFilter), 1);
    }
    onSelection(this.selectedValues);
  }
  render() {
    const { filters = [], wrapperClassName } = this.props;
    if (!Array.isArray(filters) || !filters.length) {
      return null;
    }
    const wrapperClasses = `filter ${wrapperClassName || ""}`;
    return (
      <section className={wrapperClasses}>
        <h2 className="filter__heading">
          Filters
        </h2>
        {
          filters.map((filter) => {
            return (
              <Checkbox
                key={filter}
                label={filter}
                value={filter}
                onChange={this.onChangeHandler}
              />
            );
          })
        }
      </section>
    );
  }
}

Filter.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  onSelection: PropTypes.func.isRequired,
  wrapperClassName: PropTypes.string
}

export default Filter;