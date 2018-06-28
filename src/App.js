import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Layout from './components/Layout'
import Home from './components/Home'
import Share from './components/Share'
import Export from './components/Export'
import Import from './components/Import'
import Profile from './components/Profile'
import { actionCreators } from './store/App'
const App = props => 
  (
      <Layout activeItem={props.activeItem} clickHandler={props.onMenuItemClick}>
        <Route exact path='/' component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/import' component={Import} />
        <Route path='/export' component={Export} />
        <Route path='/share' component={Share} />
      </Layout>
    )

export default connect(
  state => state.app,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(App)
