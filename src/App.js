import React, { Component } from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import Creator from './Pages/Creator/Creator'
import Browse from './Pages/Browse/Browse'
import { Route } from 'react-router-dom'
import RecipePage from './Pages/RecipePage/RecipePage'
import Footer from './Components/Footer'
import About from './Pages/About/About'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/browse/:url_params" component={Browse} />
        <Route path="/creator" component={Creator} />
        <Route path="/recipe/:uri" component={RecipePage} />
      </div>
    )
  }
}

export default App

// [x] set up remove categories and ingredients action
// and reducer and apply to UI
// [] @media all pages
