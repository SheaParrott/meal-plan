import React, { Component } from 'react'
import { connect } from 'react-redux'
import { singleRecipe } from '../Actions/SearchActions'
import Header from '../Components/Header'
import Loading from '../Components/Loading'

class RecipePage extends Component {
  constructor(props) {
    super(props)
    this.goToSingleRecipe = this.goToSingleRecipe.bind(this)
    this.state = {
      displayedInfo: 'ingredients'
    }
  }
  componentDidMount = () => {
    this.goToSingleRecipe()
  }

  goToSingleRecipe = event => {
    this.props.goToSingleRecipe(this.props.match.params.uri)
    window.scrollTo(0, 0)
  }

  render() {
    if (this.props.recipe.length <= 0) {
      return <Loading />
    }
    return (
      <div>
        <nav>
          <h1 className="basicHeader">Meal Plan</h1>
          <Header />
        </nav>
        <div className="spacingFromNav" />
        <div className="singleViewRecipe marginFromFooter">
          {this.props.recipe.map((info, index) => {
            return (
              <div key={index}>
                <h2>{info.label}</h2>

                <img
                  className="singleViewRecipeImage"
                  src={info.image}
                  alt={info.label}
                />
                <h3>
                  {(info.calories / info.yield).toFixed(0)} calories per serving
                </h3>
                <h3>{info.yield} total servings</h3>
                <section className="singleViewRecipeHealthAndWarnings">
                  <div className="healthAndWarningsContainer">
                    {info.cautions.map(caution => {
                      return (
                        <p key={caution} className="red-bg">
                          {caution}
                        </p>
                      )
                    })}
                  </div>
                  <div className="healthAndWarningsContainer">
                    {info.healthLabels.map(label => {
                      return (
                        <p key={label} className="green-bg">
                          {label}
                        </p>
                      )
                    })}
                  </div>
                </section>
                <section className="RecipeInfoContainer">
                  <div className="RecipeInfoBar">
                    <h3
                      className={
                        this.state.displayedInfo == 'ingredients'
                          ? 'shadedRecipeInfoLabel'
                          : 'recipeInfoLabel'
                      }
                      onClick={() => {
                        this.setState({
                          displayedInfo: 'ingredients'
                        })
                      }}
                    >
                      Ingredients
                    </h3>

                    <h3
                      className={
                        this.state.displayedInfo == 'digest'
                          ? 'shadedRecipeInfoLabel'
                          : 'recipeInfoLabel'
                      }
                      onClick={() => {
                        this.setState({
                          displayedInfo: 'digest'
                        })
                      }}
                    >
                      Digest
                    </h3>

                    <h3
                      className={
                        this.state.displayedInfo == 'totalDaily'
                          ? 'shadedRecipeInfoLabel'
                          : 'recipeInfoLabel'
                      }
                      onClick={() => {
                        this.setState({
                          displayedInfo: 'totalDaily'
                        })
                      }}
                    >
                      Daily
                    </h3>

                    <h3
                      className={
                        this.state.displayedInfo == 'totalNutrients'
                          ? 'shadedRecipeInfoLabel'
                          : 'recipeInfoLabel'
                      }
                      onClick={() => {
                        this.setState({
                          displayedInfo: 'totalNutrients'
                        })
                      }}
                    >
                      Nutrients
                    </h3>
                  </div>

                  {this.state.displayedInfo == 'digest' ? (
                    <div className="recipeInfo">
                      {info.digest.map(label => {
                        return (
                          <div key={label.label}>
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
                            <br />
                            <div>
                              {label.sub
                                ? label.sub.map(l => {
                                    return (
                                      <div key={l.label}>
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
                                        <br />
                                      </div>
                                    )
                                  })
                                : null}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  ) : null}
                  {this.state.displayedInfo == 'totalDaily' ? (
                    <div className="recipeInfo">
                      {Object.keys(info.totalDaily).map((key, index) => {
                        return (
                          <div key={key + index}>
                            <p>
                              {info.totalDaily[key].label}:{' '}
                              {info.totalDaily[key].quantity.toFixed(2)}{' '}
                              {info.totalDaily[key].unit}
                            </p>
                            <br />
                          </div>
                        )
                      })}
                    </div>
                  ) : null}
                  {this.state.displayedInfo == 'totalNutrients' ? (
                    <div className="recipeInfo">
                      {Object.keys(info.totalNutrients).map((key, index) => {
                        return (
                          <div key={key + index}>
                            <p>
                              {info.totalNutrients[key].label}:{' '}
                              {info.totalNutrients[key].quantity.toFixed(2)}
                              {info.totalNutrients[key].unit}
                            </p>
                            <br />
                          </div>
                        )
                      })}
                    </div>
                  ) : null}
                  {this.state.displayedInfo == 'ingredients' ? (
                    <div className="recipeInfo">
                      {info.ingredientLines.map((ingredient, index) => {
                        return (
                          <div key={ingredient + index}>
                            <h5>{ingredient}</h5> <br />
                          </div>
                        )
                      })}
                    </div>
                  ) : null}
                </section>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  recipe: state.recipe
})
const mapActionsToProps = {
  goToSingleRecipe: singleRecipe
}
export default connect(
  mapStateToProps,
  mapActionsToProps
)(RecipePage)
