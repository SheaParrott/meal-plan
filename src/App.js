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

// [] add in recommended options on front page. probably
//  hard code some favorites and randomize what is shown to
//  prevent overuse of api. Only allowed 5 api hits per minute.
// - need the image, label and uri
// - <Link to="/recipe/uri"/>
// [] fixed deploy bug that when refreshed app doesn't reload
// [x] add cors error handling "We goofed, please try again "
// [] validate the minimal number on calories and max ingredients
//    - ingredients must be more than 1
//    - calories minimum?
