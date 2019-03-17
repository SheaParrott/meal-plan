import React, { Component } from 'react'
import front from '../assets/front.jpg'
import AdvancedSearch from '../Components/AdvancedSearch'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      healthLabels: [
        'vegan',
        'vegetarian',
        'paleo',
        'dairy-free',
        'gluten-free',
        'wheat-free',
        'fat-free',
        'low-sugar',
        'egg-free',
        'peanut-free',
        'tree-nut-free',
        'soy-free',
        'fish-free',
        'shellfish-free'
      ],
      dietLabels: [
        'balanced',
        'high-protein',
        'high-fiber',
        'low-fat',
        'low-carb',
        'low-sodium'
      ]
    }
  }

  render() {
    //create a header component that handles the advanced search
    return (
      <div className="wrapper default">
        <h1>Meal Plan</h1>
        <nav>
          <div className="categoriesBar">
            <h4 className="homeButton white">HOME</h4>
            <h4 className="homeButton white">ABOUT</h4>
          </div>
          <div className="centerLine">
            <div className="line" />
          </div>
          <AdvancedSearch
            healthLabels={this.state.healthLabels}
            dietLabels={this.state.dietLabels}
          />
        </nav>
        <div className="navSpacing" />
        <img className="home" src={front} alt="cover" />
        <footer>
          <p className="white">Creator</p>
          <p className="white">About</p>
          <p className="white">&copy;SheaParrott</p>
        </footer>
      </div>
    )
  }
}

export default Home
