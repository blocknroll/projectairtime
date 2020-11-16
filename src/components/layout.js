import React from "react"
import Header from "./header"
import Logo from "./logo"
import Nav from "./nav"
import Footer from "./footer"
import layoutStyles from "../styles/layoutStyles.module.scss"

export default function Layout({ children }) {
  return (
    // FLEXBOX: the <div.layout> fills 100vh, or bigger if needed
    <div className={layoutStyles.layout}>
      <Header>
        <Logo />
        <Nav />
      </Header>

      {/* FLEXBOX: */}
      {/* <main.content> can use flex-grow to fill the parent <div.layout> if needed */}
      {/* the {children} also use flex-grow to fill the parent <main.content> if needed  */}
      <main className={layoutStyles.content}>{children}</main>

      <Footer />
    </div>
  )
}
