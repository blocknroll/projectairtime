import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import successStyles from "../styles/successStyles.module.scss"

export default function Success({ data }) {
  return (
    <Layout>
      <SEO title="Success" />
      <section className={successStyles.section}>
        <Img
          className={successStyles.imgResponsive}
          fluid={data.ChrisThumbsUp.childImageSharp.fluid}
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

// paths relative to "./src/images/" defined in gatsby-config.js > gatsby-source-filesystem
export const query = graphql`
  query {
    ChrisThumbsUp: file(relativePath: { eq: "Chris-thumbsup.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
