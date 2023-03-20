import './index.css'

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const bgContent = isDarkTheme ? 'dark-bg' : 'light-bg'

      const homeImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const linkItemsFontColor = isDarkTheme
        ? 'light-font-color'
        : 'dark-font-color'

      return (
        <>
          <Navbar />
          <div className={`content-container ${bgContent}`}>
            <img src={homeImgUrl} alt="home" className="home-img" />
            <h1 className={`heading ${linkItemsFontColor}`}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
