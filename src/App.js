import React, { Component } from 'react'
import './App.css'
import Home from './Pages/Home'
import Creator from './Pages/Creator'
import Browse from './Pages/Browse'
import { Route } from 'react-router-dom'
import RecipePage from './Pages/RecipePage'
import Footer from './Components/Footer'
import About from './Pages/About'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/browse/:url_params" component={Browse} />
        <Route path="/creator" component={Creator} />
        <Route path="/recipe/:uri" component={RecipePage} />
        <Footer />
      </div>
    )
  }
}

export default App

// [] set up remove categories and ingredients action
// and reducer and apply to UI
// [] @media all pages
