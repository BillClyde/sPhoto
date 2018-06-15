import React from 'react';
import { Grid } from 'semantic-ui-react';
import HeaderMenu from './HeaderMenu';
import SideMenu from './SideMenu';
export default props => (
  <Grid>
    <Grid.Row >
    <Grid.Column>
      <HeaderMenu activeItem={props.activeItem} clickHandler={props.clickHandler} />
    </Grid.Column>
    </Grid.Row>
    <Grid.Row verticalAlign='top'>
      <Grid.Column width={2}>
        <SideMenu activeItem={props.activeItem} clickHandler={props.clickHandler} />
      </Grid.Column>
      <Grid.Column stretched width={14}>
        {props.children}
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
