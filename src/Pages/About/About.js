import React, { Component } from 'react'
import front from '../../assets/front.jpg'
import Header from '../../Components/Header'
import './style.css'
import Footer from '../../Components/Footer'

class About extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="spash-bg">
        <div className="shaded-bg-lighter">
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
                    <h5 className="about">Thanks for Visiting!</h5>
                  </nav>
                </div>
                <div className="aboutPageSpacing" />
                <div className="aboutParagraph">
                  <h2 className="aboutInspiration">Inspiration</h2>
                  <p className="about">
                    <br /> Life is all about balance, right?
                  </p>
                  <p>
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
                <div className="thanksParagraph">
                  <h2 className="aboutInspiration">Inspiration</h2>
                  <p className="about">
                    <br /> Life is all about balance, right?
                  </p>
                  <p>
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
                <img className="home" src={front} alt="cover" />
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
