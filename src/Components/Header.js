import React, { Component } from 'react'
import AdvancedSearch from './AdvancedSearch'
import { Link } from 'react-router-dom'

class Header extends Component {
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
    return (
      <div>
        <h1>Meal Plan</h1>
        <nav>
          <div className="categoriesBar">
            <Link to="/">
              <h4 className="homeButton white">HOME</h4>
            </Link>
            {/* about page not created yet */}
            <Link to="/">
              <h4 className="homeButton white">ABOUT</h4>
            </Link>
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
      </div>
    )
  }
}

export default Header
