import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './index.css';

class GlobalErrorHandler extends PureComponent {
  render() {
    const { globalError: { message } = {} } = this.props;
    const classes = `global-error-handler${message ? " center-of-page" : ""}`;
    return (
      <div className={classes}>
        {message ? <h1>{message}</h1> : this.props.children}
      </div>
    );
  }
}

const mapStateToProps = ({ globalError }) => {
  return {
    globalError
  };
};

export default connect(mapStateToProps, null)(GlobalErrorHandler);