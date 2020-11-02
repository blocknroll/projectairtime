import React from "react"
import navStyles from "../styles/navStyles.module.scss"

export default function Header({ children }) {
  return <header className={navStyles.header}>{children}</header>
}
