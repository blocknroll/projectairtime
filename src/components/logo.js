import React from "react"
import { Link } from "gatsby"
import logo from "../images/project-airtime-logo-trimmed.png"
import navStyles from "../styles/navStyles.module.scss"

export default function Logo() {
  return (
    <div className={navStyles.logo}>
      <Link to="/">
        <img src={logo} className={navStyles.logo} alt="Project Airtime logo" />
      </Link>
    </div>
  )
}
