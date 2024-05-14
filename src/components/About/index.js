import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutBgClassName = isDarkTheme
        ? 'dark-theme-about'
        : 'light-theme-about'

      const aboutImageURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const aboutTextClassName = isDarkTheme ? 'dark-heading' : 'light-heading'

      return (
        <div className="about-page">
          <Navbar />
          {!isDarkTheme && <hr className="horizantal-line" />}
          <div className={aboutBgClassName}>
            <img src={aboutImageURL} className="about-icon" alt="about" />
            <h1 className={aboutTextClassName}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default About