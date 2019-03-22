import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class RecipeSlide extends Component {
  render() {
    return (
      <Link to={`/recipe/${this.props.recipe.uri}`}>
        <div className="slider">
          <img
            className="slider"
            src={this.props.recipe.image}
            alt={this.props.recipe.name}
          />
          <h5 className="slider">{this.props.recipe.name}</h5>
        </div>
      </Link>
    )
  }
}

export default RecipeSlide
