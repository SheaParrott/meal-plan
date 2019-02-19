import React, { Component } from 'react'

class Categories extends Component {
  render() {
    let total = this.props.healthLabels.concat(this.props.dietLabels).length
    return (
      <div className="categoriesCentering">
        <div className="allCategories">
          <div>
            {/* {this.Categories()} */}
            {this.props.healthLabels
              .concat(this.props.dietLabels)
              .splice(0, total / 2)
              .map((category, index) => {
                return (
                  <div key={index} className="CategoriesBar">
                    <h2 className="Categories white">
                      {category.toUpperCase()}
                    </h2>{' '}
                  </div>
                )
              })}
          </div>
          <div>
            {/* {this.Categories()} */}
            {this.props.healthLabels
              .concat(this.props.dietLabels)
              .splice(total / 2, total)
              .map((category, index) => {
                return (
                  <div key={index} className="CategoriesBar">
                    <h2 className="Categories white">
                      {category.toUpperCase()}
                    </h2>{' '}
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    )
  }
}

export default Categories
