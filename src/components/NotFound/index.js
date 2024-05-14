import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundBgClassName = isDarkTheme
        ? 'notfound-dark-theme'
        : 'notfound-light-theme'

      const HeadingClassName = isDarkTheme ? 'dark-heading' : 'light-heading'

      const paraClassName = isDarkTheme ? 'dark-para' : 'light-para'

      return (
        <div className="notfound-page">
          <Navbar />
          {!isDarkTheme && <hr className="horizantal-line" />}
          <div className={notFoundBgClassName}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              className="notfound-icon"
              alt="not found"
            />
            <h1 className={HeadingClassName}>Lost Your Way?</h1>
            <p className={paraClassName}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound