import { h, Component } from 'preact'
import { Router } from 'preact-router'

import Header from './header'

// Code-splitting is automated for routes
import Home from '../routes/home'
import Profile from '../routes/profile'

const allowedBasePaths = ['/', '/naturepdx/']

export default class App extends Component {

  // This is hacky but it works.
  // The issue is with preact-router: https://github.com/preactjs/preact-router/issues/263
  static getPathName() {
    const pathName = typeof window !== "undefined" && document.location.pathname;
    if (allowedBasePaths.includes(pathName)) {
      return pathName;
    }
    return "/";
  }

  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url
  }

  render () {
    return (
      <div id='root-elm'>
        <Header path={App.getPathName()} />
        <Router onChange={this.handleRoute}>
          <Home path={App.getPathName()} />
          <Profile path={`${App.getPathName()}profile/`} user='me' />
          <Profile path={`${App.getPathName()}profile/:user`} />
        </Router>
      </div>
    )
  }
}
