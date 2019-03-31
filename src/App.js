import React, { Component } from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import Creator from './Pages/Creator/Creator'
import { Route } from 'react-router-dom'
import RecipePage from './Pages/RecipePage/RecipePage'
import About from './Pages/About/About'
import Results from './Pages/Results/Results'
import Browse from './Pages/Browse/Browse'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/results/:url_params" component={Results} />
        <Route path="/creator" component={Creator} />
        <div className="small-view">
          <Route exact path="/browse" component={Browse} />
        </div>
        <Route path="/recipe/:uri" component={RecipePage} />
      </div>
    )
  }
}

export default App

// to do:
// [] implement a browse page for mobile view and change current browse name to results
// [x] implement indication on which page user is on
// [] implement cached data
// [x] highlight page number currently on
// [x] extend advanced search bar to all pages that work with the recipes
// [] refactor single recipe page to have info to the side of the image for desktop view
// [x] add validation to prevent the same categories chosen twice
// [] (onkeydown or onKeyPress (one of these should be the fix)) add guard clause to number inputs that prevents 'e' from getting added.
//    - type of not number return
// [] start the week recipe planner
//    - [] create a page where recipe can be saved to certain days and times
//    - [] add a export to pdf option
