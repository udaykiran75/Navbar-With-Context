import './index.css'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => {
        toggleTheme()
      }

      const websiteLogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const themeColorClassName = isDarkTheme
        ? 'dark-theme-navbar'
        : 'light-theme-navbar'

      const textColor = isDarkTheme ? 'dark-route-name' : 'light-route-name'

      return (
        <div className={themeColorClassName}>
          <Link to="/" className="link-element">
            <img src={websiteLogoUrl} className="web-logo" alt="website logo" />
          </Link>
          <ul className="routes-list">
            <li className={textColor}>
              <Link to="/" className={textColor}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={textColor}>
                About
              </Link>
            </li>
          </ul>
          <button
            data-testid="theme"
            type="button"
            className="theme-button"
            onClick={onToggleTheme}
          >
            <img src={themeImageUrl} className="theme-icon" alt="theme" />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
