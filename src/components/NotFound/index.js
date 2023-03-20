import './index.css'

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const bgContent = isDarkTheme ? 'dark-bg' : 'light-bg'

      const linkItemsFontColor = isDarkTheme
        ? 'light-font-color'
        : 'dark-font-color'

      return (
        <>
          <Navbar />
          <div className={`content-container ${bgContent}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="home-img"
            />
            <h1 className={`heading ${linkItemsFontColor}`}>Lost Your Way?</h1>
            <p className={`heading ${linkItemsFontColor}`}>
              We cannot seem to find the page you were looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
