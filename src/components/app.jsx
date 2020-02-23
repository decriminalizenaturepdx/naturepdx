import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './header'
import Home from '../routes/home'

export default class App extends Component {

  render () {
    return (
      <>
        <CssBaseline />
        <Header />
        <Home />
      </>
    )
  }
}
