import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import front from './assets/front.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Meal Plan</h1>
        <input placeholder="search here!" />
        <button>submit</button>
        <img class="home" src={front} alt="cover" />
      </div>
    )
  }
}

export default App
