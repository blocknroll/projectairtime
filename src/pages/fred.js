import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import Youtube from "../components/youtube"
import videoStyles from "../styles/videoStyles.module.scss"

export default function Fred({ data }) {
  return (
    <Layout>
      <section className={videoStyles.section}>
        <Container>
            <Youtube
              videoSrcURL="https://www.youtube-nocookie.com/embed/tsWAJCETtOg?autoplay=1"
              videoTitle="First Top Launch"
              videoCaption="Fred"
            />
        </Container>
      </section>
    </Layout>
  )
}
