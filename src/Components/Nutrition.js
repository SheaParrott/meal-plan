import React, { Component } from 'react'

class Nutrition extends Component {
  render() {
    if (
      !this.props.label.total &&
      !this.props.label.daily &&
      !this.props.label.sub
    ) {
      return <div />
    }
    return (
      <div className="cell">
        <div>
          <h4 className="singleRecipeInformation">{this.props.label.label}</h4>

          <div>
            {/* start of info */}
            <div>
              {!this.props.label.daily ||
              !this.props.label.schemaOrgTag ? null : (
                <p className="singleRecipeInformation">
                  {' '}
                  {this.props.label.schemaOrgTag} <br />
                  {this.props.label.daily.toFixed(2)}%
                </p>
              )}

              {!this.props.label.total ||
              !this.props.label.unit ||
              !this.props.label.tag ? null : (
                <p className="singleRecipeInformation">
                  {this.props.label.tag}
                  <br />
                  {this.props.label.total.toFixed(2)} {this.props.label.unit}
                </p>
              )}

              <br />
              {this.props.label.sub
                ? this.props.label.sub.map((l, index) => {
                    return (
                      <div key={index}>
                        <h4 className="singleRecipeInformation">{l.label}</h4>

                        {!l.daily || !l.schemaOrgTag ? null : (
                          <p className="singleRecipeInformation">
                            {l.schemaOrgTag} <br />
                            {l.daily.toFixed(2)}%{' '}
                          </p>
                        )}

                        {!l.total || !l.unit || !l.tag ? null : (
                          <p className="singleRecipeInformation">
                            {l.tag} <br />
                            {l.total.toFixed(2)}
                            {l.unit}{' '}
                          </p>
                        )}

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
