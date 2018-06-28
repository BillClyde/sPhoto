import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../store/Share'
export default connect(
  state => state.share,
  dispatch => bindActionCreators(actionCreators, dispatch)
)( props => (
  <div>This is the Share page</div>
))
