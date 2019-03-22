import React, { Component } from 'react'
import front from '../../assets/front.jpg'
import Header from '../../Components/Header'
import './style.css'
import Footer from '../../Components/Footer'

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      InspirationShown: 'Inspiration'
    }
  }
  componentDidMount = () => {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="spash-bg">
        {/* <div className="shaded-bg"> */}
        <div className="single-view-page-home ">
          <div className="default">
            <div className="default aboutPage">
              <div>
                <nav>
                  <h1 className="basicHeaderPlus">Meal Plan</h1>
                  <Header />

                  <div className="centerLine">
                    <div className="line" />
                  </div>
                  <div className="thanksOrInspiration small-view">
                    <h5
                      className="about white"
                      onClick={() => {
                        this.setState({
                          InspirationShown: 'Inspiration'
                        })
                      }}
                    >
                      INSPIRATION
                    </h5>
                    <h5
                      className="about white"
                      onClick={() => {
                        this.setState({
                          InspirationShown: 'thanks'
                        })
                      }}
                    >
                      SPECIAL THANKS
                    </h5>
                  </div>
                  <h5 className="about big-view">Thanks for Visiting!</h5>
                </nav>
              </div>
              <div className="aboutPageSpacing " />
              {this.state.InspirationShown == 'Inspiration' ? (
                <div className="aboutParagraph small-view">
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
              ) : (
                <div className="aboutParagraph small-view">
                  <h2 className="aboutInspiration">Special Thanks!</h2>
                  <p className="about">
                    <br /> Thank you EDAMAM for providing the awesome and free
                    API used in this project. Documentation can be found here:{' '}
                    <strong>
                      <a
                        className="white"
                        href="https://www.edamam.com/"
                        target="_blank"
                      >
                        https://www.edamam.com/
                      </a>
                    </strong>{' '}
                    <br />
                    <br />
                  </p>
                  <p className="about aboutInspiration"> -Blessings-</p>
                </div>
              )}

              <div className="aboutParagraph big-view">
                <h2 className="aboutInspiration">Inspiration</h2>
                <p className="about aboutInspiration">
                  <br /> Life is all about balance, right?
                </p>
                <p className="aboutInspiration">
                  <strong>Well I think so!</strong>
                </p>
                <p className="about">
                  <br /> A healthy diet is one of those balances most of us
                  struggle with. This is something that I have realized and it
                  has takes precedence in my day to day life. In an effort to
                  better myself for a healthier lifestyle and help others{' '}
                  <i>Meal Plan</i> was created! I hope this helps you as much as
                  it will help me!
                  <br />
                  <br />
                </p>
                <h2 className="aboutInspiration">Special Thanks!</h2>
                <p className="about">
                  <br /> Thank you EDAMAM for providing the API used in this
                  project. Documentation can be found here:{' '}
                  <strong>
                    <a
                      className=""
                      href="https://www.edamam.com/"
                      target="_blank"
                    >
                      https://www.edamam.com/
                    </a>
                  </strong>
                  <br />
                  <br />
                </p>
                <p className="about aboutInspiration"> -Blessings-</p>
              </div>

              <img className="home small-view" src={front} alt="cover" />
            </div>
            <Footer />
          </div>
        </div>
        {/* </div> */}
      </div>
    )
  }
}

export default About
