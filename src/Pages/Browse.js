import React, { Component } from 'react'
import { connect } from 'react-redux'
import Recipe from '../Components/Recipe'

class Browse extends Component {
  render() {
    // determines the pages shown on the bottom
    const pagesLength = Math.ceil(Math.log10(this.props.from + 1))
    //now need to figure out a way to highlight current page
    // from and to explained:
    // it stops just before the to. shows 10 at one time.
    // 0-10, 10-20, 20-21
    // so shows 0-9 and 0 have a value
    // to paginate need to add 10 to every click or minus
    // 10 from every page
    // arrows should add 50? or 60?, will test for this
    return (
      <div>
        <h2>{this.props.q} Results</h2>
        <div>
          {this.props.hits.map((hit, index) => {
            // console.log(hit.recipe)
            // console.log(hit.recipe.uri)
            return <Recipe key={index} hit={hit} />
          })}
        </div>
        <div className="browse">
          <i className="fas fa-chevron-left white-hv" />
          {/* filter to return the 5 within range of current
           chosen page */}
          {this.props.pages
            ? this.props.pages
                .slice(pagesLength, pagesLength + 5)
                .map((page, index) => {
                  return (
                    <p key={index} className="white-hv">
                      {page}
                    </p>
                  )
                })
            : null}
          <i class="fas fa-chevron-right white-hv" />
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
  hits: state.hits,
  pages: state.pages
})
const mapActionsToProps = {
  // _searchRecipe: getRecipes
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Browse)
