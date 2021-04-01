import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"
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
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
        meta={[
          {
            name: `description`,
            content: `Project Airtime is a Nevada 501(c)(3) non-profit based in Draper, Utah. Our mission is take EVERYONE flying with a paraglider. When we say EVERYONE, we mean it. No exclusions. From special needs individuals to those with brain and spinal cord injuries. Individuals with illness, as well as the elderly and veterans. Our co-pilots have one thing in common, they want to fly!`,
          },
          {
            charSet: `utf-8`,
          },
        ]}
      >
        <title>Project Airtime</title>
        <link rel="canonical" href="http://localhost:8000/" />
      </Helmet>
      <Layout>
        <Img
          fluid={data.img04.childImageSharp.fluid}
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
