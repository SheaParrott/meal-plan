import React, { Component } from 'react'

class Nutrition extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showSubNutrition: false
    }
  }
  _showSubNutrition = () => {
    this.setState({
      showSubNutrition: !this.state.showSubNutrition
    })
  }
  render() {
    console.log(this.props.label)
    if (!this.props.label.length) {
      return <div />
    }
    return (
      <div>
        {this.props.label.map((l, i) => {
          return l.map((label, index) => {
            console.log(label)
            // if (!label.total && !label.daily && !label.sub) {
            //   return <div key={i} />
            // }
            return (
              <div key={index}>
                <div>
                  <span
                    className="nutritionArrowFlex"
                    onClick={this._showSubNutrition}
                  >
                    {this.state.showSubNutrition ? (
                      <i className="fas fa-caret-down" />
                    ) : (
                      <i className="fas fa-caret-right" />
                    )}

                    <h4 className="singleRecipeInformation">{label.label}</h4>
                  </span>
                </div>
                {this.state.showSubNutrition ? (
                  <div>
                    {/* start of info */}
                    <div>
                      <p className="singleRecipeInformation">
                        {!label.daily || !label.schemaOrgTag
                          ? ''
                          : `${label.daily.toFixed(2)}% ${label.schemaOrgTag}`}
                      </p>

                      <p className="singleRecipeInformation">
                        {!label.total || !label.unit || !label.tag
                          ? ''
                          : `${label.total.toFixed(2)}${label.unit} ${
                              label.tag
                            }`}
                      </p>
                      <br />
                      {label.sub
                        ? label.sub.map(l => {
                            return (
                              <div
                                className="informationDisplayed"
                                key={l.label}
                              >
                                <h4 className="singleRecipeInformation">
                                  {l.label}
                                </h4>
                                <p className="singleRecipeInformation">
                                  {!l.daily || !l.schemaOrgTag
                                    ? ''
                                    : `${l.daily.toFixed(2)}% ${
                                        l.schemaOrgTag
                                      }`}
                                </p>
                                <p className="singleRecipeInformation">
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
                    {/* end of info */}
                  </div>
                ) : null}
              </div>
            )
          })
        })}
      </div>
    )
  }
}

export default Nutrition
