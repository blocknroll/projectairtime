import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import errorStyles from "../styles/errorStyles.module.scss"

export default function Success() {
  return (
    <Layout>
      <section className={errorStyles.section}>
        <div className={errorStyles.container}>
          <span role="img" aria-label="face with monocle">
            🧐
          </span>
          <h1>Hmmmmmm.</h1>
          <h3>Sorry, but we don't have a page here.</h3>
          <p>
            How about we head back to the <Link to="/">homepage...</Link>
          </p>
        </div>
      </section>
    </Layout>
  )
}
