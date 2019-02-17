import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import front from './assets/front.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Meal Plan</h1>
        <nav>
          <input placeholder="search here!" />
          <button>submit</button>
        </nav>
        <img className="home" src={front} alt="cover" />
        <footer>
          <p>Creator</p>
          <p>Home</p>
          <p>&copy;SheaParrott</p>
        </footer>
      </div>
    )
  }
}

export default App
