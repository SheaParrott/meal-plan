import React, { Component } from 'react'

class Recipe extends Component {
  test = event => {
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
          src={this.props.hit.recipe.image}
          alt={this.props.hit.recipe.label}
        />
        <div>
          <h3>{this.props.hit.recipe.label}</h3>
          <h3>
            {(
              this.props.hit.recipe.calories / this.props.hit.recipe.yield
            ).toFixed(0)}{' '}
            calories per serving
          </h3>
          <h4>Caution:</h4>
          <div>
            {this.props.hit.recipe.cautions.map(caution => {
              return <p>{caution}</p>
            })}
          </div>
          <h4>Health Labels</h4>
          <div>
            {this.props.hit.recipe.healthLabels.map(label => {
              return <p>{label}</p>
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Recipe
