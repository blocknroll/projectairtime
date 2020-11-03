import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import layoutStyles from "../styles/layoutStyles.module.scss"

export default function Home({ data }) {
  return (
    <Layout>
      <Img
        className={layoutStyles.imgResponsive}
        fluid={data.img04.childImageSharp.fluid}
        alt="paragliding"
      />
    </Layout>
  )
}

// paths relative to "gatsby-source-filesystem" in gatsby-config. ie: src/images/
export const query = graphql`
  query {
    img01: file(relativePath: { eq: "01.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img02: file(relativePath: { eq: "02.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img03: file(relativePath: { eq: "03.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img04: file(relativePath: { eq: "04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img01Fixed: file(relativePath: { eq: "01.jpg" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    img04Fixed: file(relativePath: { eq: "04.jpg" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
