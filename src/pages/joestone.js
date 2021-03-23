import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import Youtube from "../components/youtube"
import videoStyles from "../styles/videoStyles.module.scss"

export default function Joe({ data }) {
  return (
    <Layout>
      <section className={videoStyles.section}>
        <Container>
            <Youtube
              videoSrcURL="https://www.youtube-nocookie.com/embed/k2-cvuGmWvc?autoplay=1"
              videoTitle="Project Airtime | Joe Stone"
              videoCaption="Joe"
            />
        </Container>
      </section>
    </Layout>
  )
}