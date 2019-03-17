import React, { Component } from 'react'

class componentName extends Component {
  // for this page display the one specific recipe chosen
  // need to use the state of chosenRecipe from Redux
  render() {
    return (
      <div>
        <h3>{this.props.hit.recipe.label}</h3>
        <h3 onClick={this.test}>go to {this.props.hit.recipe.label}</h3>
        <h3>
          {(
            this.props.hit.recipe.calories / this.props.hit.recipe.yield
          ).toFixed(0)}{' '}
          calories per serving
        </h3>
        <h4>{this.props.hit.recipe.yield} total servings</h4>
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
        <img
          src={this.props.hit.recipe.image}
          alt={this.props.hit.recipe.label}
        />
        <h4>Ingrediants:</h4>
        <div>
          {this.props.hit.recipe.ingredientLines.map(ingrediant => {
            return <p>{ingrediant}</p>
          })}
        </div>
        <h4>Digest:</h4>
        <div>
          {this.props.hit.recipe.digest.map(label => {
            return (
              <div>
                <h5>{label.label}</h5>
                <p>
                  {!label.daily || !label.schemaOrgTag
                    ? ''
                    : `${label.daily.toFixed(2)}% ${label.schemaOrgTag}`}
                </p>

                <p>
                  {!label.total || !label.unit || !label.tag
                    ? ''
                    : `${label.total.toFixed(2)}${label.unit} ${label.tag}`}
                </p>
                <div>
                  {label.sub
                    ? label.sub.map(l => {
                        return (
                          <div>
                            <h5>{l.label}</h5>
                            <p>
                              {!l.daily || !l.schemaOrgTag
                                ? ''
                                : `${l.daily.toFixed(2)}% ${l.schemaOrgTag}`}
                            </p>
                            <p>
                              {!l.total || !l.unit || !l.tag
                                ? ''
                                : `${l.total.toFixed(2)}${l.unit} ${l.tag}`}
                            </p>
                          </div>
                        )
                      })
                    : null}
                </div>
              </div>
            )
          })}
        </div>
        <h4>Total Daily:</h4>
        <div>
          {Object.keys(this.props.hit.recipe.totalDaily).map(key => {
            return (
              <p>
                {this.props.hit.recipe.totalDaily[key].label}:{' '}
                {this.props.hit.recipe.totalDaily[key].quantity.toFixed(2)}{' '}
                {this.props.hit.recipe.totalDaily[key].unit}
              </p>
            )
          })}
        </div>
        <h4>Total Nutrients:</h4>
        <div>
          {Object.keys(this.props.hit.recipe.totalNutrients).map(key => {
            return (
              <p>
                {this.props.hit.recipe.totalNutrients[key].label}:{' '}
                {this.props.hit.recipe.totalNutrients[key].quantity.toFixed(2)}
                {this.props.hit.recipe.totalNutrients[key].unit}
              </p>
            )
          })}
        </div>
      </div>
    )
  }
}

export default componentName
