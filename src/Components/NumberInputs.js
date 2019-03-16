import React, { Component } from 'react'

class NumberInputs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      min: 0,
      max: 0
    }
  }

  changeMin = event => {
    if (event.target.value <= 0) {
      return
    }
    this.setState({
      min: event.target.value
    })
  }
  changeMax = event => {
    if (event.target.value <= 0) {
      return
    }
    this.setState({
      max: event.target.value
    })
  }
  render() {
    return (
      <div>
        {this.state.min >= 1 || this.state.max >= 1 ? (
          <div>
            <input
              className="numberInput"
              type="number"
              onChange={this.changeMin}
              value={this.state.min}
            />
            {this.props.ingredient ? null : (
              <span>
                <span className="label">to</span>
                <input
                  className="numberInput"
                  type="number"
                  onChange={this.changeMax}
                  value={this.state.max}
                />
              </span>
            )}
          </div>
        ) : (
          <div>
            <input
              className="numberInput"
              type="number"
              onChange={this.changeMin}
              placeholder="any"
            />
            {this.props.ingredient ? null : (
              <span>
                <span className="label">to</span>
                <input
                  className="numberInput"
                  type="number"
                  onChange={this.changeMax}
                  placeholder="any"
                />
              </span>
            )}
          </div>
        )}
      </div>
    )
  }
}

export default NumberInputs
