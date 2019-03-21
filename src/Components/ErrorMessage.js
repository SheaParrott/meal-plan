import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

class ErrorMessage extends Component {
  render() {
    return (
      <div className="spash-bg">
        <div className="shaded-bg">
          <div className="single-view-page">
            <main className="error">
              <div>
                <nav>
                  <h1 className="basicHeader">Meal Plan</h1>
                  <Header />
                </nav>
                {this.props.singleViewRecipePage ? (
                  <div>
                    <h2 className="uppercase noResults">
                      {' '}
                      Seems we Goofed!
                      <span role="img" aria-label="goofiness emoji">
                        🙃
                      </span>
                    </h2>
                    <h5 className="tryAgain">Please Try Again Later!</h5>
                  </div>
                ) : (
                  <div>
                    <h2 className="uppercase noResults">No Results</h2>
                    <h5 className="tryAgain">Please Try Again Later!</h5>
                  </div>
                )}

                <div className="centerLine">
                  <div className="line" />
                </div>
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

export default ErrorMessage