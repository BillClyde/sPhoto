import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../store/Import'
export default connect(
  state => state.import,
  dispatch => bindActionCreators(actionCreators, dispatch)
)( props => (
 <button onClick={props.onImportFiles}>ImportFiles</button>
))
