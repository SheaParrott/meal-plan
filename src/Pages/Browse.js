import React, { Component } from 'react'
import { connect } from 'react-redux'
import Recipe from '../Components/Recipe'
import { getRecipes } from '../Actions/SearchActions'
import Header from '../Components/Header'
import Loading from '../Components/Loading'

class Browse extends Component {
  constructor(props) {
    super(props)
    this._searchRecipe = this._searchRecipe.bind(this)
  }
  componentDidMount = () => {
    this._searchRecipe()
  }
  _searchRecipe = event => {
    this.props._searchRecipe(this.props.match.params.url_params)
  }
  render() {
    if (this.props.hits.length <= 0) {
      return (
        <div>
          <nav>
            <h1 className="basicHeader">Meal Plan</h1>
            <Header />
          </nav>
          <Loading />
        </div>
      )
    } else if (this.props.hits[0] === 'No Results') {
      return (
        <div>
          <nav>
            <h1 className="basicHeader">Meal Plan</h1>
            <Header />
          </nav>
          <h2 className="uppercase">No Results</h2>
          <div className="centerLine">
            <div className="line" />
          </div>
        </div>
      )
    }
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
        <nav>
          <h1 className="basicHeader">Meal Plan</h1>
          <Header />
        </nav>
        <div className="spacingFromNav" />
        <div>
          <h2 className="uppercase">{this.props.q} Results</h2>
          <div className="centerLine">
            <div className="line" />
          </div>
          <div>
            {this.props.hits.map((hit, index) => {
              return <Recipe key={hit + index} hit={hit} />
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
            <i className="fas fa-chevron-right white-hv" />
          </div>
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
  _searchRecipe: getRecipes
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Browse)
