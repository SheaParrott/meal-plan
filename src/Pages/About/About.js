import React, { Component } from 'react'
import front from '../../assets/front.jpg'
import Header from '../../Components/Header'
import './style.css'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom'
import AdvancedSearch from '../../Components/AdvancedSearch'

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'Inspiration'
    }
  }
  componentDidMount = () => {
    window.scrollTo(0, 0)
  }
  _selectedParagraph = value => {
    this.setState({
      selected: value
    })
  }

  render() {
    return (
      <div className="spash-bg">
        <div className="no-shaded-bg">
          <div className="single-view-page">
            <div className="default">
              <div className=" aboutPage background-added   defaultHeight">
                <div>
                  <AdvancedSearch
                    selectedParagraph={this.state.selected}
                    _selectedParagraph={this._selectedParagraph}
                    aboutPage={true}
                  />
                </div>
                <div className="aboutPageSpacing " />
                <div
                  className={`aboutParagraph small-view ${
                    this.state.selected == 'Inspiration'
                      ? 'animated'
                      : 'animated-hide'
                  }`}
                >
                  <h2 className="aboutInspiration">Inspiration</h2>
                  <p className="about aboutInspiration ">
                    <br /> Life is all about balance, right?
                  </p>
                  <p className="aboutInspiration">
                    <br />
                    <strong>Well I think so!</strong>
                  </p>
                  <p className="about">
                    <br /> A healthy diet is one of those balances most of us
                    struggle with. This is something that I have realized and it
                    has takes precedence in my day to day life. In an effort to
                    better myself for a healthier lifestyle and help others{' '}
                    <i>Meal Plan</i> was created! I hope this helps you as much
                    as it will help me!
                    <br />
                    <br />
                  </p>
                  <p className="about"> -Blessings-</p>
                </div>
                <div
                  className={`aboutParagraph small-view ${
                    this.state.selected == 'thanks'
                      ? 'animated'
                      : 'animated-hide'
                  }`}
                >
                  <h2 className="aboutInspiration">Special Thanks!</h2>
                  <p className="about">
                    <br /> Thank you EDAMAM for providing the API used in this
                    project. Please go check out EDAMAM and give them your
                    support! Documentation can be found here:{' '}
                    <strong>
                      <a
                        className="EDAMAM-link white-mellow"
                        href="https://www.edamam.com/"
                        target="_blank"
                      >
                        https://www.edamam.com/
                      </a>
                    </strong>
                    .
                    <br />
                    <br />
                  </p>
                  <p className="about aboutInspiration"> -Blessings-</p>
                </div>
                <div
                  className={`aboutParagraph small-view ${
                    this.state.selected == 'HappyOrIssues'
                      ? 'animated'
                      : 'animated-hide'
                  }`}
                >
                  <h2 className="aboutInspiration">
                    Enjoy The Site <br />
                    <i>or</i> <br />
                    Find An Issue?
                  </h2>
                  <p className="about">
                    <br /> Check out the{' '}
                    <Link className="EDAMAM-link" to="/creator">
                      <strong>Creator</strong>{' '}
                    </Link>
                    page and reach out to me I would love to hear from you!
                    <br />
                    <br />
                  </p>
                  <p className="about aboutInspiration"> -Blessings-</p>
                </div>
                }
                <div className="aboutSpacingFromNav" />
                <section className="center-about">
                  <main className="big-view">
                    <div className="aboutParagraph-desktop ">
                      <h2 className="aboutInspiration">Inspiration</h2>
                      <p className="about">
                        <br /> Life is all about balance, right?
                        <br />
                        <br />
                      </p>
                      <p>
                        <strong>Well I think so!</strong>
                      </p>
                      <p className="about">
                        <br /> A healthy diet is one of those balances most of
                        us struggle with. This is something that I have realized
                        and it has takes precedence in my day to day life. In an
                        effort to better myself for a healthier lifestyle and
                        help others <i>Meal Plan</i> was created! I hope this
                        helps you as much as it will help me!
                        <br />
                        <br />
                        <br />
                      </p>
                      <h2 className="aboutInspiration">
                        Enjoy The Site <i>or</i> Find An Issue?
                      </h2>
                      <p className="about">
                        <br /> Check out the{' '}
                        <Link className="EDAMAM-link" to="/creator">
                          <strong>Creator</strong>{' '}
                        </Link>
                        page and reach out to me I would love to hear from you!
                        <br />
                        <br />
                        <br />
                      </p>
                      <h2 className="aboutInspiration">Special Thanks!</h2>
                      <p className="about">
                        <br /> Thank you EDAMAM for providing the API used in
                        this project. Please go check out EDAMAM and give them
                        your support! Documentation can be found here:{' '}
                        <strong>
                          <a
                            className="EDAMAM-link"
                            href="https://www.edamam.com/"
                            target="_blank"
                          >
                            https://www.edamam.com/
                          </a>
                        </strong>
                        .
                        <br />
                        <br />
                        <br />
                      </p>
                      <p className="about aboutInspiration"> -Blessings-</p>
                      <br />
                    </div>
                  </main>
                </section>
                {/* <img className="home mobile-tablet" src={front} alt="cover" /> */}
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
