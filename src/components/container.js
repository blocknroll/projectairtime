import React from "react"
import containerStyles from "../styles/containerStyles.module.scss"

export default function Container({ children }) {
  return <div className={containerStyles.container}>{children}</div>
}
