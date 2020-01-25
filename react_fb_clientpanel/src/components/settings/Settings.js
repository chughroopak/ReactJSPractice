import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  setAllowRegistration,
  setDisabledBalanceOnAdd,
  setDisabledBalanceOnEdit
} from "../../actions/settingsActions";

class Settings extends Component {
  disableBalanceOnAddChange = () => {
    const { setDisabledBalanceOnAdd } = this.props;
    setDisabledBalanceOnAdd();
  };

  disableBalanceOnEditChange = () => {
    const { setDisabledBalanceOnEdit } = this.props;
    setDisabledBalanceOnEdit();
  };

  allowRegistrationChange = () => {
    const { setAllowRegistration } = this.props;
    setAllowRegistration();
  };

  render() {
    const {
      disableBalanceOnAdd,
      disableBalanceOnEdit,
      allowRegistration
    } = this.props.settings;
    return (
      <div>
        <div className='row'>
          <div className='col-md-6'>
            <Link to='/' className='btn btn-link'>
              <i className='fas fa-arrow-circle-left' />
              Back To Dashboard
            </Link>
          </div>
        </div>
        <div className='card'>
          <div className='card-header'>Edit Setting</div>
          <div className='card-body'>
            <form>
              <div className='form-group'>
                <label>Allow Registration </label>
                <input
                  type='checkbox'
                  name='allowRegistration'
                  checked={!!allowRegistration}
                  onChange={this.allowRegistrationChange}
                />
              </div>
              <div className='form-group'>
                <label>Disable Balance On Add </label>
                <input
                  type='checkbox'
                  name='disableBalanceOnAdd'
                  checked={!!disableBalanceOnAdd}
                  onChange={this.disableBalanceOnAddChange}
                />
              </div>
              <div className='form-group'>
                <label>Disable Balance On Edit </label>
                <input
                  type='checkbox'
                  name='disableBalanceOnEdit'
                  checked={!!disableBalanceOnEdit}
                  onChange={this.disableBalanceOnEditChange}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  settings: PropTypes.object.isRequired,
  setDisabledBalanceOnAdd: PropTypes.func.isRequired,
  setDisabledBalanceOnEdit: PropTypes.func.isRequired,
  setAllowRegistration: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

export default connect(
  (state, props) => ({
    auth: state.firebase.auth,
    settings: state.settings
  }),
  {
    setAllowRegistration,
    setDisabledBalanceOnAdd,
    setDisabledBalanceOnEdit
  }
)(Settings);
