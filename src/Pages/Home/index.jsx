import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchOKRs, filterOKRs } from '../../Containers/Actions/ActionsRepository';
import { Filter, OKRS, Loader, Details } from '../../Components/ComponentsRepository';
import { FILTER_KEY } from '../../Utils/Constants';
import { OkrsContext } from '../../Utils/Contexts';
import { filterData } from '../../Utils/Helpers';
import './index.css';

class Home extends PureComponent {
  state = {
    selectedObjective: null
  }
  componentDidMount() {
    const { fetchOKRs = () => { } } = this.props;

    /* filterKey is the data-property on which filtering will be performed */
    fetchOKRs({ filterKey: FILTER_KEY });
  }

  filter = (selectedFilters = []) => {
    const { filterOKRs } = this.props;
    filterOKRs(FILTER_KEY, selectedFilters);
  }

  showDetails = (selectedObjective = null) => {
    this.setState({
      selectedObjective
    });
  }

  hideDetails = () => {
    this.setState({
      selectedObjective: null
    });
  }

  render() {
    const { filters, okrs, isFetching = false } = this.props;
    const { selectedObjective } = this.state;
    if (isFetching) {
      return <Loader />
    }
    return (
      <div className="home-page">
        <Filter
          filters={filters}
          onSelection={this.filter}
        />
        <OkrsContext.Provider value={okrs}>
          <OKRS showDetails={this.showDetails} />
        </OkrsContext.Provider>
        {
          selectedObjective &&
          <Details
            data={selectedObjective}
            onDetailsHide={this.hideDetails}
          />
        }
      </div>
    )
  }
}

const generateObjectivesToKeyReultsMappingList = (okrs) => {
  const result = [];
  okrs.forEach((objective) => {
    if (!objective['parent_objective_id']) {
      const keyResultsOfAnObjective = okrs.filter((keyResult) => {
        return keyResult['parent_objective_id'] == objective.id;
      });
      result.push({ ...objective, keyResults: keyResultsOfAnObjective });
    }
  });
  return result;
}

const mapStateToProps = ({ okrs: {
  okrs,
  filter,
  filters
} = {}, isFetching }) => {

  /* Process raw OKRs to create a list of mapping of objective to key-results */
  let objectiveKeyResultsMappedList = generateObjectivesToKeyReultsMappingList(okrs);
  objectiveKeyResultsMappedList = filterData({ data: objectiveKeyResultsMappedList, ...filter });

  return {
    okrs: objectiveKeyResultsMappedList,
    filter,
    filters,
    isFetching
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