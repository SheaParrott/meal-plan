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
      displayedInfo: 'ingredients' // when chosen give it a highlighted color
    }
  }
  componentDidMount = () => {
    this.goToSingleRecipe()
  }
  // for this page display the one specific recipe chosen
  // need to use the state of chosenRecipe from Redux

  goToSingleRecipe = event => {
    // onClick we will add the uri to the url
    // this.props.match.params.uri will be used to
    // fetch the data for the specific recipe
    // use componentDidMount to fetch
    // uri encoding works!

    this.props.goToSingleRecipe(this.props.match.params.uri)
  }
  displayedfacts = info => {
    switch (this.state.displayedInfo) {
      case 'digest':
        return (
          <div className="recipeInfo">
            {info.digest.map(label => {
              return (
                <div key={label}>
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
                  <br />
                  <div>
                    {label.sub
                      ? label.sub.map(l => {
                          return (
                            <div key={l}>
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
        )
      case 'totalDaily':
        return (
          <div className="recipeInfo">
            {Object.keys(info.totalDaily).map(key => {
              return (
                <div key={key}>
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
        )
      case 'totalNutrients':
        return (
          <div className="recipeInfo">
            {Object.keys(info.totalNutrients).map(key => {
              return (
                <div key={key}>
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
        )
      case 'ingredients':
        return (
          <div className="recipeInfo">
            {info.ingredientLines.map(ingredient => {
              return (
                <div key={ingredient}>
                  <h5>{ingredient}</h5> <br />
                </div>
              )
            })}
          </div>
        )
      default:
        return
    }
    // state to determin which.
    // switch case for what is returned
  }
  // display:
  // calories
  // servings
  // cautions
  // health labels
  // ingrediants

  // bar:
  // facts
  // break down to type of facts display one at a time
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
                      className="recipeInfoLabel"
                      onClick={() => {
                        this.setState({
                          displayedInfo: 'ingredients'
                        })
                      }}
                    >
                      Ingredients
                    </h3>

                    <h3
                      className="recipeInfoLabel"
                      onClick={() => {
                        this.setState({
                          displayedInfo: 'digest'
                        })
                      }}
                    >
                      Digest
                    </h3>

                    <h3
                      className="recipeInfoLabel"
                      onClick={() => {
                        this.setState({
                          displayedInfo: 'totalDaily'
                        })
                      }}
                    >
                      Daily
                    </h3>

                    <h3
                      className="recipeInfoLabel"
                      onClick={() => {
                        this.setState({
                          displayedInfo: 'totalNutrients'
                        })
                      }}
                    >
                      Nutrients
                    </h3>
                  </div>

                  {this.displayedfacts(info)}
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
