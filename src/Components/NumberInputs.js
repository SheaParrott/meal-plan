import React, { Component } from 'react'
import { connect } from 'react-redux'
import { minAndMaxParams } from '../Actions/SearchActions'

class NumberInputs extends Component {
  constructor(props) {
    super(props)
    this._Min = this._Min.bind(this)
    this._Max = this._Max.bind(this)
  }

  _Min = event => {
    let max = ''
    let min = ''
    if (this.props.label == 'calories') {
      max = this.props.calories.max
      min = event.target.value
    } else if (this.props.label == 'cookTime') {
      max = this.props.cookTime.max
      min = event.target.value
    }

    if (min < 0) {
      return
    } else if (min > max && max) {
      this.props._numberError(`Max must be higher than Min`)
      return
    } else if (this.props.errorIsTrue) {
      this.props._numberError('')
    }

    this.props._Min({
      theCase: this.props.label,
      min: min,
      max: max
    })
  }

  _Max = event => {
    let max = ''
    let min = ''
    if (this.props.label == 'maxIngredients') {
      max = event.target.value
    } else if (this.props.label == 'calories') {
      min = this.props.calories.min
      max = event.target.value
    } else if (this.props.label == 'cookTime') {
      min = this.props.cookTime.min
      max = event.target.value
    }

    if (min < 0) {
      return
    } else if (min > max && max) {
      this.props._numberError(`Max must be higher than Min`)
      return
    } else if (
      this.props.errorIsTrue &&
      this.props.label !== 'maxIngredients'
    ) {
      this.props._numberError('')
    }

    this.props._Max({
      theCase: this.props.label,
      min: min,
      max: max
    })
  }
  render() {
    return (
      <div>
        <div>
          {this.props.ingredient ? null : (
            <span>
              <input
                className="numberInput"
                type="number"
                min="0"
                step="10"
                pattern="\d+"
                onChange={this._Min}
                value={
                  this.props.label == 'cookTime'
                    ? this.props.cookTime.min
                    : this.props.calories.min
                }
                placeholder="any"
              />
              <span className="label">to</span>
            </span>
          )}
          <input
            className="numberInput"
            type="number"
            min="0"
            step="10"
            pattern="\d+"
            onChange={this._Max}
            value={
              this.props.label == 'cookTime'
                ? this.props.cookTime.max
                : this.props.label == 'calories'
                ? this.props.calories.max
                : this.props.maxIngredients.max
            }
            placeholder="any"
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  calories: state.calories,
  cookTime: state.cookTime,
  maxIngredients: state.maxIngredients
})

const mapActionsToProps = {
  _Min: minAndMaxParams,
  _Max: minAndMaxParams
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(NumberInputs)
