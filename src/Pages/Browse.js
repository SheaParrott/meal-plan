import React, { Component } from 'react'
import { connect } from 'react-redux'

class Browse extends Component {
  test = url => {
    // uri encoding works!
    url =
      'http://www.edamam.com/ontologies/edamam.owl#recipe_f113067a382021b6c76a5963a8a7e52e'
    let hh = encodeURIComponent(url).replace(/[!*]/g, function(c) {
      return '%' + c.charCodeAt(0).toString(16)
    })
    console.log(hh)
  }
  // function fixedEncodeURIComponent(str) {
  //   return encodeURIComponent(str).replace(/[!*]/g, function(c) {
  //     return '%' + c.charCodeAt(0).toString(16);
  //   });
  // }
  render() {
    return (
      <div>
        <h2>Results for {this.props.q}:</h2>
        <div>
          {this.props.hits.map((hit, index) => {
            console.log(hit.recipe)
            return (
              <div key={index}>
                <h3>{hit.recipe.label}</h3>
                <h3>
                  {(hit.recipe.calories / hit.recipe.yield).toFixed(0)} calories
                  per serving
                </h3>
                <h4>{hit.recipe.yield} total servings</h4>
                <img src={hit.recipe.image} alt={hit.recipe.label} />
                <h4>Ingrediants:</h4>
                <div>
                  {hit.recipe.ingredientLines.map(ingrediant => {
                    return <p>{ingrediant}</p>
                  })}
                </div>
                <h4>Digest:</h4>
                <div>
                  {hit.recipe.digest.map(label => {
                    return (
                      <div>
                        <h5>{label.label}</h5>
                        <p>
                          {!label.daily || !label.schemaOrgTag
                            ? ''
                            : `${label.daily.toFixed(2)}% ${
                                label.schemaOrgTag
                              }`}
                        </p>

                        <p>
                          {!label.total || !label.unit || !label.tag
                            ? ''
                            : `${label.total.toFixed(2)}${label.unit} ${
                                label.tag
                              }`}
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
                                        : `${l.daily.toFixed(2)}% ${
                                            l.schemaOrgTag
                                          }`}
                                    </p>
                                    <p>
                                      {!l.total || !l.unit || !l.tag
                                        ? ''
                                        : `${l.total.toFixed(2)}${l.unit} ${
                                            l.tag
                                          }`}
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
                <h4>Caution:</h4>
                <div>
                  {hit.recipe.cautions.map(caution => {
                    return <p>{caution}</p>
                  })}
                </div>
                <h4>Total Daily:</h4>
                <div>
                  {Object.keys(hit.recipe.totalDaily).map(key => {
                    return (
                      <p>
                        {hit.recipe.totalDaily[key].label}:{' '}
                        {hit.recipe.totalDaily[key].quantity.toFixed(2)}{' '}
                        {hit.recipe.totalDaily[key].unit}
                      </p>
                    )
                  })}
                </div>
                <h4>Total Nutrients:</h4>
                <div>
                  {Object.keys(hit.recipe.totalNutrients).map(key => {
                    return (
                      <p>
                        {hit.recipe.totalNutrients[key].label}:{' '}
                        {hit.recipe.totalNutrients[key].quantity.toFixed(2)}
                        {hit.recipe.totalNutrients[key].unit}
                      </p>
                    )
                  })}
                </div>
              </div>
            )
          })}
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
  hits: state.hits
})
const mapActionsToProps = {
  // _searchRecipe: getRecipes
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Browse)
