import React, { Component } from 'react'

class Recipe extends Component {
  test = event => {
    // onClick we will add the uri to the url
    // this.props.match.params.url will be used to
    // fetch the data for the specific recipe
    // use componentDidMount to fetch
    let url = this.props.hit.recipe.uri
    // uri encoding works!
    let encodedURI = encodeURIComponent(url).replace(/[!*]/g, function(c) {
      return '%' + c.charCodeAt(0).toString(16)
    })
    console.log(encodedURI)
  }
  render() {
    return (
      <div className="browseRecipeContainer" onClick={this.test}>
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

export default Recipe
