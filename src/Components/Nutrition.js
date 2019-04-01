import React, { Component } from 'react'

class Nutrition extends Component {
  render() {
    // console.log(this.props.label)
    // if (!this.props.label.length) {
    //   return <div />
    // }
    // if (!label.total && !label.daily && !label.sub) {
    //   return <div key={i} />
    // }
    return (
      <div className="digest-cell">
        <div>
          <h4 className="singleRecipeInformation">{this.props.label.label}</h4>

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
                      <div
                        className="informationDisplayedNutrition"
                        key={l.label}
                      >
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
        </div>
      </div>
    )
  }
}

export default Nutrition
