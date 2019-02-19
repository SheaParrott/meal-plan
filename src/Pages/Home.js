import React, { Component } from 'react'
import front from '../assets/front.jpg'
import AddOrRemoveForm from '../Components/AddOrRemoveForm'
import NumberInputs from '../Components/NumberInputs'
import AdvancedSearch from '../Components/AdvancedSearch'
import CategoriesSearch from '../Components/CategoriesSearch'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: false,
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
  handleCategories = () => {
    this.setState({
      categories: !this.state.categories
    })
  }

  render() {
    return (
      <div className="wrapper">
        <h1>Meal Plan</h1>
        <nav>
          <div className="categoriesBar">
            <h4 className="homeButton white">HOME</h4>
            {this.state.categories ? (
              <h4 onClick={this.handleCategories} className="homeButton white">
                ADVANCED SEARCH
              </h4>
            ) : (
              <h4 onClick={this.handleCategories} className="homeButton white">
                CATEGORIES
              </h4>
            )}
          </div>
          <div className="centerLine">
            <div className="line" />
          </div>
          {!this.state.categories ? (
            <AdvancedSearch
              healthLabels={this.state.healthLabels}
              dietLabels={this.state.dietLabels}
            />
          ) : (
            <CategoriesSearch
              healthLabels={this.state.healthLabels}
              dietLabels={this.state.dietLabels}
            />
          )}
        </nav>
        <div className="navSpacing" />
        <img className="home" src={front} alt="cover" />
        <footer>
          <p className="white">Creator</p>
          <p className="white">&copy;SheaParrott</p>
        </footer>
      </div>
    )
  }
}

export default Home
