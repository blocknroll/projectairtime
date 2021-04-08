import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import successStyles from "../styles/successStyles.module.scss"

export default function Success({ data }) {
  return (
    <Layout>
      <SEO title="Success" />
      <section className={successStyles.section}>
        <StaticImage
          src="../images/Chris-thumbsup.jpg"
          alt="Chris Santacroce and his co-pilot paragliding at Point of the Mountain in Draper, Utah."
        />

        <div className={successStyles.container}>
          <h1>"YEAH BUDDY!!!"</h1>

          <h3>
            Thank you so much{" "}
            <span role="img" aria-label="folded hands: medium-light skin tone">
              🙏🏼
            </span>
            <br></br>We'll be in contact soon!
          </h3>

          <p>
            In the meantime, let's head back to the{" "}
            <Link to="/">homepage.</Link>
          </p>
        </div>
      </section>
    </Layout>
  )
}
