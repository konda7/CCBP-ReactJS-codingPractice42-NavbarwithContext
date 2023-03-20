import './index.css'

import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickThemeChanger = () => {
        toggleTheme()
      }

      const navBarClassName = isDarkTheme ? 'dark-nav-bar' : 'light-nav-bar'

      const websiteLogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const linkItemsFontColor = isDarkTheme
        ? 'light-font-color'
        : 'dark-font-color'

      const ThemeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <nav className={navBarClassName}>
          <img src={websiteLogoUrl} alt="website logo" className="logo-img" />
          <ul className="link-elements-container">
            <li className={`link-items ${linkItemsFontColor}`}>
              <Link to="/" className="link-text">
                Home
              </Link>
            </li>
            <li className={`link-items ${linkItemsFontColor}`}>
              <Link to="/about" className="link-text">
                About
              </Link>
            </li>
          </ul>
          <button
            data-testId="theme"
            type="button"
            className="theme-btn"
            onClick={onClickThemeChanger}
          >
            <img src={ThemeImg} alt="theme" className="theme-img" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
