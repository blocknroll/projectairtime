import React from "react"
import Header from "./header"
import Logo from "./logo"
import layoutStyles from "../styles/layoutStyles.module.scss"

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.layout}>
      <Header>
        <Logo />
      </Header>
      {children}
    </div>
  )
}
