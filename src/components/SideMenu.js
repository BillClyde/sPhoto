import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../store/SideMenu'

const SideMenu = props => (
      <Menu secondary vertical fluid>
        <Menu.Item name='collection' 
                   active={props.activeItem === 'collection'} 
                   onClick={props.clickHandler}
                   as={Link} to='/' >Collection
        </Menu.Item>
        <Menu.Item name='import' 
                   active={props.activeItem === 'import'} 
                   as={Link} to='/import'
                   onClick={props.clickHandler}>Import</Menu.Item>
        <Menu.Item name='export' 
                   active={props.activeItem === 'export'} 
                   as={Link} to='/export'
                   onClick={props.clickHandler}>Export</Menu.Item>
        <Menu.Item name='share' 
                   active={props.activeItem === 'share'} 
                   as={Link} to='/share'
                   onClick={props.clickHandler}>Share</Menu.Item>
      </Menu>
)
export default connect(
  state => state.import,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(SideMenu)
