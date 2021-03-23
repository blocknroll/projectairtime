import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import Youtube from "../components/youtube"
import videoStyles from "../styles/videoStyles.module.scss"

export default function Serei({ data }) {
  return (
    <Layout>
      <section className={videoStyles.section}>
        <Container>
            <Youtube
              videoSrcURL="https://www.youtube-nocookie.com/embed/rX511v45TIU?autoplay=1"
              videoTitle="Project Airtime | Serei"
              videoCaption="Serei"
            />
        </Container>
      </section>
    </Layout>
  )
}