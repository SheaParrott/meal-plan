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
    if (
      !this.props.label.total &&
      !this.props.label.daily &&
      !this.props.label.sub
    ) {
      return <div />
    }
    return (
      <div>
        <div>
          <span className="nutritionArrowFlex" onClick={this._showSubNutrition}>
            {this.state.showSubNutrition ? (
              <i className="fas fa-caret-down" />
            ) : (
              <i className="fas fa-caret-right" />
            )}

            <h3 className="singleRecipeInformation">
              {this.props.label.label}
            </h3>
          </span>
        </div>
        {this.state.showSubNutrition ? (
          <div>
            {/* start of info */}
            <div>
              <p className="singleRecipeInformation">
                {!this.props.label.daily || !this.props.label.schemaOrgTag
                  ? ''
                  : `${this.props.label.daily.toFixed(2)}% ${
                      this.props.label.schemaOrgTag
                    }`}
              </p>

              <p className="singleRecipeInformation">
                {!this.props.label.total ||
                !this.props.label.unit ||
                !this.props.label.tag
                  ? ''
                  : `${this.props.label.total.toFixed(2)}${
                      this.props.label.unit
                    } ${this.props.label.tag}`}
              </p>
              <br />
              {this.props.label.sub
                ? this.props.label.sub.map(l => {
                    return (
                      <div className="informationDisplayed" key={l.label}>
                        <h4 className="singleRecipeInformation">{l.label}</h4>
                        <p className="singleRecipeInformation">
                          {!l.daily || !l.schemaOrgTag
                            ? ''
                            : `${l.daily.toFixed(2)}% ${l.schemaOrgTag}`}
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
  }
}

export default Nutrition
