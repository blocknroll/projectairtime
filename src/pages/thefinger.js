import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import Youtube from "../components/youtube"
import videoStyles from "../styles/videoStyles.module.scss"

export default function Thefinger({ data }) {
  return (
    <Layout>
      <section className={videoStyles.section}>
        <Container>
          <Youtube
            videoSrcURL="https://www.youtube-nocookie.com/embed/1S2InrR1pkQ?autoplay=1"
            videoTitle="The Finger: Paragliding Kite Trick with Chris Santacroce"
            videoCaption="The Finger: Paragliding Kite Trick with Chris Santacroce"
            returnLink="about"
          />
        </Container>
      </section>
    </Layout>
  )
}
