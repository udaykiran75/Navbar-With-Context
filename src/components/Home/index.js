import './index.css'

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeBgClassName = isDarkTheme
        ? 'dark-theme-home'
        : 'light-theme-home'

      const homeImageURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const homeTextClassName = isDarkTheme ? 'dark-heading' : 'light-heading'

      return (
        <div className="home-container">
          <Navbar />
          {!isDarkTheme && <hr className="horizantal-line" />}
          <div className={homeBgClassName}>
            <img src={homeImageURL} className="home-icon" alt="home" />
            <h1 className={homeTextClassName}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home