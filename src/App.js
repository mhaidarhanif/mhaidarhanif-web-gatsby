import { h, Component } from 'preact'
import { Router } from 'preact-router'
import { ThemeProvider } from '@xstyled/emotion'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/home'

const theme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    primary: '#f2c94c',
    secondary: '#222222',
  },
}

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
        <ThemeProvider theme={theme}>
          <Header />
          <Router onChange={this.handleRoute}>
            <Home path='/' />
          </Router>
          <Footer />
        </ThemeProvider>
      </div>
    )
  }
}
