import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchOKRs, filterOKRs } from '../../Containers/Actions/ActionsRepository';
import { Filter } from '../../Components/ComponentsRepository';
import { FILTER_KEY } from '../../Utils/Constants';
import './index.css';

class Home extends PureComponent {
  componentDidMount() {
    const { fetchOKRs = () => { } } = this.props;

    /* filterKey is the data-property on which filtering will be performed */
    fetchOKRs({ filterKey: FILTER_KEY });
  }

  filter = (selectedFilters = []) => {
    const { filterOKRs } = this.props;
    filterOKRs(FILTER_KEY, selectedFilters);
  }

  render() {
    const { filters } = this.props;
    return (
      <div className="home-page">
        <Filter
          filters={filters}
          onSelection={this.filter}
        />
        <div>
          {
            this.props.okrs.map((okr) => {
              return (
                <div className="item" key={okr.id}>
                  {okr.title}
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ okrs: {
  okrs,
  filter,
  filters
} = {} }) => {

  /* Process raw OKRs to create a list of mapping of objective to key-results */
  let objectiveKeyResultsMappedList = [];
  okrs.forEach((objective) => {
    if (!objective['parent_objective_id']) {
      const keyResultsOfAnObjective = okrs.filter((keyResult) => {
        return keyResult['parent_objective_id'] == objective.id;
      });
      objectiveKeyResultsMappedList.push({ ...objective, objectives: keyResultsOfAnObjective });
    }
  });

  /* If any filter is selected, filter OKRs list basis that */
  const { key, value } = filter;
  if (value.length) {
    objectiveKeyResultsMappedList = objectiveKeyResultsMappedList.filter((objective) => {
      return value.includes(objective[key]);
    });
  }

  return {
    okrs: objectiveKeyResultsMappedList,
    filter,
    filters
  };
}

const actions = {
  fetchOKRs,
  filterOKRs
};

Home.propTypes = {
  okrs: PropTypes.arrayOf(PropTypes.shape({
    "id": PropTypes.string,
    "category": PropTypes.string,
    "title": PropTypes.string,
    "metric_name": PropTypes.string,
    "metric_start": PropTypes.string,
    "metric_target": PropTypes.string,
    "parent_objective_id": PropTypes.string,
    "archived": PropTypes.string
  })).isRequired,
  filter: PropTypes.object,
  filters: PropTypes.arrayOf(PropTypes.string),
  fetchOKRs: PropTypes.func.isRequired,
  filterOKRs: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, actions)(Home);