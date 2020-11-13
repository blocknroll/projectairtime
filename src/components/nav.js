import React from "react"
import { Link } from "gatsby"
import navStyles from "../styles/navStyles.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const hamburgerIcon = <FontAwesomeIcon icon={faBars} />

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.setState(state => ({
      showMenu: !state.showMenu,
    }))
  }

  render() {
    return (
      <nav>
        <button className={navStyles.hamburger} onClick={this.toggleMenu}>
          {hamburgerIcon}
        </button>

        <ul className={this.state.showMenu ? ` ${navStyles.isActive}` : ""}>
          <li>
            <Link to="/" onClick={this.toggleMenu}>
              Home
            </Link>
          </li>

          <li>
            <Link to="#intro" onClick={this.toggleMenu}>
              Introduction
            </Link>
          </li>

          <li>
            <Link to="#video" onClick={this.toggleMenu}>
              Videos
            </Link>
          </li>

          <li>
            <Link to="#news" onClick={this.toggleMenu}>
              In the News
            </Link>
          </li>

          <li>
            <Link to="#sponsors" onClick={this.toggleMenu}>
              Sponsors
            </Link>
          </li>

          <li>
            <Link to="#about" onClick={this.toggleMenu}>
              About Us
            </Link>
          </li>

          <li>
            <Link to="#contact" onClick={this.toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
