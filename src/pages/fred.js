import React from "react"
import Container from "../components/container"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Video from "../components/video"
import videoStyles from "../styles/videoStyles.module.scss"

export default function Fred({ data }) {
  return (
    <Layout>
      <section className={videoStyles.section}>
        <Container>
          {/* <div className={videoStyles.grid}> */}
            <Video
              videoSrcURL="https://www.youtube.com/embed/tsWAJCETtOg"
              videoTitle="First Top Launch"
              videoCaption="Fred"
            />
          {/* </div> */}
        </Container>
      </section>
    </Layout>
  )
}
