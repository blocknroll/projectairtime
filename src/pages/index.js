import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Intro from "../components/intro"
import Videos from "../components/videos"
import News from "../components/news"
import Sponsors from "../components/sponsors"
import About from "../components/about"
import Form from "../components/form"

export default function Home({ data }) {
  return (
    <div>
      <Layout>
        <SEO title="Home" />
        <StaticImage
          src="../images/04.jpg"
          alt="Chris Santacroce and his co-pilot paragliding at Point of the Mountain in Draper, Utah."
        />
        <Intro />
        <Videos />
        <News />
        <Sponsors />
        <About />
        <Form />
      </Layout>
    </div>
  )
}

// paths relative to "./src/images/" defined in gatsby-config.js > gatsby-source-filesystem
export const query = graphql`
  {
    img04: file(relativePath: { eq: "04.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`
