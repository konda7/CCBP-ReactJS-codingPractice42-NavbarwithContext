import './index.css'

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const bgContent = isDarkTheme ? 'dark-bg' : 'light-bg'

      const homeImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const linkItemsFontColor = isDarkTheme
        ? 'light-font-color'
        : 'dark-font-color'

      return (
        <>
          <Navbar />
          <div className={`content-container ${bgContent}`}>
            <img src={homeImgUrl} alt="about" className="home-img" />
            <h1 className={`heading ${linkItemsFontColor}`}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
