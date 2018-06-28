import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../store/Collection'
export default connect(
  state => state.import,
  dispatch => bindActionCreators(actionCreators, dispatch)
)( props => (
 <div>This is the home page</div> 
))
