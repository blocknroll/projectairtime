import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import Youtube from "../components/youtube"
import videoStyles from "../styles/videoStyles.module.scss"

export default function Theline({ data }) {
  return (
    <Layout>
      <SEO title="The Line video" />
      <section className={videoStyles.section}>
        <Container>
          <Youtube
            videoSrcURL="https://www.youtube-nocookie.com/embed/RjDtVkBHRHw?autoplay=1"
            videoTitle="Chris Santacroce | The Line Tahoe"
            videoCaption="Chris Santacroce | The Line Tahoe"
            returnLink="about"
          />
        </Container>
      </section>
    </Layout>
  )
}
