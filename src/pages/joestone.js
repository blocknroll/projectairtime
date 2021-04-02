import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import Youtube from "../components/youtube"
import videoStyles from "../styles/videoStyles.module.scss"

export default function Joe({ data }) {
  return (
    <Layout>
      <SEO title="Joe video" />
      <section className={videoStyles.section}>
        <Container>
          <Youtube
            videoSrcURL="https://www.youtube-nocookie.com/embed/k2-cvuGmWvc?autoplay=1"
            videoTitle="Project Airtime | Joe Stone"
            videoCaption="Joe"
            returnLink="videos"
          />
        </Container>
      </section>
    </Layout>
  )
}
