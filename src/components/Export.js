import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../store/Export'
export default connect(
  state => state.export,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(props => (
  <div>This is the export page</div>
))
