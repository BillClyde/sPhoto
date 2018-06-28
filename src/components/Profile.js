import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../store/Profile'
export default connect(
  state => state.profile,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(props => (
  <div>This is the profile page</div>
))
