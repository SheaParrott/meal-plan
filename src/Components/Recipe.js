import React, { Component } from 'react'
import { connect } from 'react-redux'
import { singleRecipe } from '../Actions/SearchActions'

class Recipe extends Component {
  constructor(props) {
    super(props)
    this.goToSingleRecipe = this.goToSingleRecipe.bind(this)
  }
  goToSingleRecipe = event => {
    // onClick we will add the uri to the url
    // this.props.match.params.url will be used to
    // fetch the data for the specific recipe
    // use componentDidMount to fetch
    // uri encoding works!

    this.props.goToSingleRecipe(this.props.hit.recipe.uri)
  }
  render() {
    return (
      <div className="browseRecipeContainer" onClick={this.goToSingleRecipe}>
        <img
          className="browseRecipeImage"
          src={this.props.hit.recipe.image}
          alt={this.props.hit.recipe.label}
        />
        <div className="browseRecipeInfo">
          <h3>{this.props.hit.recipe.label}</h3>
          <h6>
            {(
              this.props.hit.recipe.calories / this.props.hit.recipe.yield
            ).toFixed(0)}{' '}
            Calories Per Serving
          </h6>
          <div className="healthAndWarningsContainer">
            {this.props.hit.recipe.cautions.map(caution => {
              return <p className="red-bg">{caution}</p>
            })}
          </div>
          <div className="healthAndWarningsContainer">
            {this.props.hit.recipe.healthLabels.map(label => {
              return <p className="green-bg">{label}</p>
            })}
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  count: state.count,
  from: state.from,
  to: state.to,
  more: state.more,
  q: state.q,
  hits: state.hits,
  pages: state.pages
})
const mapActionsToProps = {
  // _searchRecipe: getRecipes
  goToSingleRecipe: singleRecipe
}
export default connect(
  mapStateToProps,
  mapActionsToProps
)(Recipe)
