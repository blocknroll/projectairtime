import React from "react"
import Header from "./header"
import layoutStyles from "../styles/layoutStyles.module.scss"

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.layout}>
      <Header>
        <h1>PROJECT AIRTIME</h1>
      </Header>
      {children}
    </div>
  )
}
