import React, { Component } from 'react'
import HomeRecipe from './HomeRecipe'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class TasteOfCountries extends Component {
  render() {
    return (
      <div className="country-container">
        <h3 className="country-slider">{this.props.country.country}</h3>
        <div className="country-homeRecipeSlider">
          {this.props.country.food.map(recipe => {
            return <HomeRecipe key={recipe.uri} recipe={recipe} taste={true} />
          })}
        </div>
        <Link
          to={`/browse/&q=${this.props.country.country}${
            this.props.from.param
          }${this.props.toParam.param}`}
        >
          <h4 className="country-slider green">See More</h4>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  from: state.from,
  toParam: state.toParam
})

const mapActionsToProps = {}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(TasteOfCountries)
