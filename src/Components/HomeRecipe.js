import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class RecipeSlide extends Component {
  render() {
    console.log(this.props.recipe)
    return (
      <div className={this.props.taste ? 'the-country-slider' : 'slider'}>
        <Link to={`/recipe/${this.props.recipe.uri}`}>
          <div>
            {' '}
            <img
              className={this.props.taste ? 'the-country-slider' : 'slider'}
              src={this.props.recipe.image}
              alt={this.props.recipe.name}
            />
            <h5 className="slider">{this.props.recipe.name}</h5>
          </div>
        </Link>
        <section>
          <div className="centerLine">
            <div className="sourceLine" />
          </div>
          <div className="credit-home">
            <a className="source" href={this.props.recipe.url} target="_blank">
              {this.props.recipe.source.toUpperCase()}
            </a>
            <a
              className="source"
              href={this.props.recipe.shareAs}
              target="_blank"
            >
              EDAMAM
            </a>
          </div>
        </section>
      </div>
    )
  }
}

export default RecipeSlide

// "shareAs": "http://www.edamam.com/recipe/asian-dipping-sauce-e8f9c1d7064b350f38319a435b3b150f/-",
// "source": "Saveur",
// "url":
