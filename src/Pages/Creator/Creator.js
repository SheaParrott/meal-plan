import React, { Component } from 'react'
import CreatorImage from '../../assets/hmm.jpg'
import resume from '../../assets/resume.png'
import Header from '../../Components/Header'
import './style.css'
import Footer from '../../Components/Footer'

class Creator extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="default">
        <div>
          <nav>
            <h1>Shea Parrott</h1>
            <Header />
          </nav>
          <div className="creatorSpacingFromNav" />
          <div className="creatorPage  marginFromFooter">
            <img className="creator boxShadow" src={CreatorImage} alt="Shea" />

            <div className="largerViewCreator">
              <div className="col">
                <a className="text-secondary" href="tel://1-904-629-8670">
                  <i className="fas fa-phone creatorPage" />
                  <h4 className="creatorInfo">(904) 629-8670</h4>
                </a>
              </div>
              <div className="col">
                <a
                  className="text-secondary"
                  href="https://github.com/SheaParrott"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github creatorPage" />
                  <h4 className="creatorInfo">github.com/SheaParrott</h4>
                </a>
              </div>
              <div className="col">
                <a
                  className="text-secondary"
                  href="https://www.linkedin.com/in/shea-parrott/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin creatorPage" />
                  <h4 className="creatorInfo">linkedin.com/in/shea-parrott/</h4>
                </a>
              </div>
              <div className="col">
                <a
                  className="text-secondary"
                  href="http://shea-portfolio.surge.sh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-book-open creatorPage" />
                  <h4 className="creatorInfo">shea-portfolio.surge.sh/</h4>
                </a>
              </div>
              <div className="col text-secondary">
                <a
                  className="serif text-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://docs.google.com/document/d/1Z1NtGepxXQ0KSNtZz0EUiudEEIBaKcgVpIWB3Awpvl0/edit?usp=sharing"
                >
                  <i className="fas fa-file creatorPage" />
                  <h4 className="creatorInfo">Link to resume</h4>
                </a>
              </div>
            </div>
            <div className="columnCentering">
              <div className="col">
                <a
                  className="serif"
                  href="https://docs.google.com/document/d/1Z1NtGepxXQ0KSNtZz0EUiudEEIBaKcgVpIWB3Awpvl0/export?format=pdf"
                >
                  <img
                    className="widthbig resume boxShadow box-secondary"
                    src={resume}
                    alt="resume"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Creator
