import React from "react"
import { Link } from "gatsby"
import navStyles from "../styles/navStyles.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const hamburger = <FontAwesomeIcon icon={faBars} />

const MenuItems = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "#intro",
    title: "Introduction",
  },
  {
    path: "#video",
    title: "Videos",
  },
  {
    path: "#news",
    title: "In the News",
  },
  {
    path: "#sponsors",
    title: "Sponsors",
  },
  {
    path: "#about",
    title: "About Us",
  },
  {
    path: "#contact",
    title: "Contact",
  },
]

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showMenu: false }

    this.handleToggleClick = this.handleToggleClick.bind(this)
  }

  handleToggleClick() {
    this.setState(state => ({
      showMenu: !state.showMenu,
    }))
  }

  render() {
    const listMenuItems = MenuItems.map((menuItem, index) => (
      <ListLink key={index} to={menuItem.path}>
        {menuItem.title}
      </ListLink>
    ))
    return (
      <nav className={navStyles.siteNavigation}>
        <button
          onClick={this.handleToggleClick}
          className={
            `${navStyles.menuTrigger}` +
            (this.state.showMenu ? ` ${navStyles.isActive}` : "")
          }
        >
          <div className={navStyles.hamburger}>{hamburger}</div>
        </button>
        <ul>{listMenuItems}</ul>
      </nav>
    )
  }
}

export default Navigation
