import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../store/HeaderMenu'

const HeaderMenu = props =>  (
      <Menu>
        <Menu.Item header>sPhoto</Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item
            name='profile'
            active={props.activeItem === 'profile'}
            as={Link} to='/profile'
            onClick={props.clickHandler} />
        </Menu.Menu>
      </Menu>
    )
export default connect(
  state => state.headerMenu,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(HeaderMenu)
