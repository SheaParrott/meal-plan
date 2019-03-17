import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '../App'
import Home from '../Pages/Home'
import Browse from '../Pages/Browse'
import RecipePage from '../Pages/RecipePage'
import Creator from '../Pages/Creator'
// import header component that handles advanced search

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/browse/:filters" component={Browse} />
      <Route path="/creator" component={Creator} />
      <Route path="/recipe/:uri" component={RecipePage} />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
