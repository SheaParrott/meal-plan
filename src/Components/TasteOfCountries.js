import React, { Component } from 'react'
import HomeRecipe from './HomeRecipe'
import { connect } from 'react-redux'
import { SearchedRecipe } from '../Actions/SearchActions'
import { Redirect } from 'react-router'

class TasteOfCountries extends Component {
  constructor(props) {
    super(props)
    this._SearchedRecipe = this._SearchedRecipe.bind(this)
    this.state = {
      navigate: false
    }
  }
  _SearchedRecipe = () => {
    this.props._SearchedRecipe(this.props.country.country)
    this.setState({
      navigate: true
    })
  }
  render() {
    if (this.state.navigate) {
      return (
        <Redirect
          to={`/results/&q=${this.props.country.country}${
            this.props.from.param
          }${this.props.toParam.param}`}
          push={true}
        />
      )
    }
    return (
      <div className="country-container">
        <h3 className="country-slider">{this.props.country.country}</h3>
        <div className="country-homeRecipeSlider">
          {this.props.country.food.map(recipe => {
            return <HomeRecipe key={recipe.uri} recipe={recipe} taste={true} />
          })}
        </div>
        <h4 onClick={this._SearchedRecipe} className="seeMore green">
          See More
        </h4>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  from: state.from,
  toParam: state.toParam
})

const mapActionsToProps = {
  _SearchedRecipe: SearchedRecipe
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(TasteOfCountries)
