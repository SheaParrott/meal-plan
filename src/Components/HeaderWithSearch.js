import React, { Component } from 'react'
import AdvancedSearch from './AdvancedSearch'
import { Link } from 'react-router-dom'
import Header from './Header'

class HeaderWithSearch extends Component {
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
          <Header />
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

export default HeaderWithSearch
