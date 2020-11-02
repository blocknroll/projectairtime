import React from "react"
import layoutStyles from "../styles/layoutStyles.module.scss"

export default function Layout({ children }) {
  return <div className={layoutStyles.layout}>{children}</div>
}
