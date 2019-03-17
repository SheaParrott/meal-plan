import React, { Component } from 'react'
import './App.css'
// import PropTypes from 'prop-types'
import Home from './Pages/Home'
import Creator from './Pages/Creator'
import Browse from './Pages/Browse'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import RecipePage from './Pages/RecipePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/browse/:filters" component={Browse} />
          <Route path="/creator" component={Creator} />
          <Route path="/recipe/:uri" component={RecipePage} />
        </Router>
        {/* <Home />
        <Browse />
        <RecipePage /> */}
      </div>
    )
  }
}
// App.propTypes = {
//   store: PropTypes.object.isRequired
// }

export default App
