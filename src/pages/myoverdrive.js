import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import Youtube from "../components/youtube"
import videoStyles from "../styles/videoStyles.module.scss"

export default function Myoverdrive({ data }) {
  return (
    <Layout>
      <section className={videoStyles.section}>
        <Container>
          <Youtube
            videoSrcURL="https://www.youtube-nocookie.com/embed/8fOLPpmteTg?autoplay=1"
            videoTitle="My Overdrive by Chris Santacroce | Discount Tire"
            videoCaption="My Overdrive by Chris Santacroce"
            returnLink="about"
          />
        </Container>
      </section>
    </Layout>
  )
}
