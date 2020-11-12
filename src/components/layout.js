import React from "react"
import Header from "./header"
import Logo from "./logo"
import Nav from "./nav"
import Footer from "./footer"
import layoutStyles from "../styles/layoutStyles.module.scss"

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.layout}>
      <Header>
        <Logo />
        <Nav />
      </Header>
      {children}
      <Footer />
    </div>
  )
}
