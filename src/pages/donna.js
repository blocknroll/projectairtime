import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import Youtube from "../components/youtube"
import videoStyles from "../styles/videoStyles.module.scss"

export default function Donna({ data }) {
  return (
    <Layout>
      <section className={videoStyles.section}>
        <Container>
            <Youtube
              videoSrcURL="https://www.youtube-nocookie.com/embed/3HqPbHUSeU4?autoplay=1"
              videoTitle="Project Airtime | Donna"
              videoCaption="Donna"
            />
        </Container>
      </section>
    </Layout>
  )
}