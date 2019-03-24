import React, { Component } from 'react'
import { connect } from 'react-redux'
import { singleRecipe } from '../Actions/SearchActions'
import { Link } from 'react-router-dom'

class Recipe extends Component {
  constructor(props) {
    super(props)
    this.goToSingleRecipe = this.goToSingleRecipe.bind(this)
  }
  goToSingleRecipe = event => {
    this.props.goToSingleRecipe(this.props.hit.recipe.uri)
  }
  render() {
    return (
      <div className="browseRecipeContainer">
        <main className="recipeContainer">
          <Link
            to={`/recipe/${this.props.hit.recipe.uri.replace(
              'http://www.edamam.com/ontologies/edamam.owl#recipe_',
              ''
            )}`}
          >
            <div className="mainContent">
              <img
                className="browseRecipeImage"
                src={this.props.hit.recipe.image}
                alt={this.props.hit.recipe.label}
              />
              <div className="browseRecipeInfo">
                <h3 className="browse-label">{this.props.hit.recipe.label}</h3>
                <h6 className="browse-calories">
                  {(
                    this.props.hit.recipe.calories / this.props.hit.recipe.yield
                  ).toFixed(0)}{' '}
                  Calories Per Serving
                </h6>
                <div className="healthAndWarningsContainer">
                  {this.props.hit.recipe.cautions.map((caution, index) => {
                    return (
                      <p key={caution + index} className="red-bg-browse">
                        {caution}
                      </p>
                    )
                  })}
                </div>
                <div className="healthAndWarningsContainer">
                  {this.props.hit.recipe.healthLabels.map((label, index) => {
                    return (
                      <p key={label + index} className="green-bg-browse">
                        {label}
                      </p>
                    )
                  })}
                </div>
              </div>
            </div>
          </Link>
        </main>
        <section>
          <div className="centerLine">
            <div className="sourceLine" />
          </div>
          <div className="credit">
            <a
              href={this.props.hit.recipe.url}
              className="source"
              target="_blank"
            >
              {this.props.hit.recipe.source.toUpperCase()}
            </a>
            <a
              className="source"
              href={this.props.hit.recipe.shareAs}
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
