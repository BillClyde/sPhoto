import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Share from './components/Share';
import Export from './components/Export';
import Import from './components/Import';
import Profile from './components/Profile';

class App extends Component {
  state = { activeItem: 'collection'}

  handleItemClick = (e, { name }) =>{ 
    this.setState({ activeItem: name });
  }
  render() {
    return (
      <Layout activeItem={this.state.activeItem} clickHandler={this.handleItemClick}>
        <Route exact path='/' component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/import' component={Import} />
        <Route path='/export' component={Export} />
        <Route path='/share' component={Share} />
      </Layout>
    );
  }
}

export default App;
