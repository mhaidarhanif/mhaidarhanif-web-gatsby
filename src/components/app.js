import { h, Component } from 'preact'
import { Router } from 'preact-router'

import Header from './Header'
import Footer from './Footer'

import Home from '../pages/home'

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event
   *	@param {string} event.url
   */
  handleRoute = (event) => {
    this.currentUrl = event.url
  }

  render() {
    return (
      <div id='app'>
        <Header />

        <Router onChange={this.handleRoute}>
          <Home path='/' />
        </Router>

        <Footer />
      </div>
    )
  }
}
