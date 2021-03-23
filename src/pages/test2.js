import React from "react"
import Container from "../components/container"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Video from "../components/video"
import videoStyles from "../styles/videoStyles.module.scss"

export default function Test2({ data }) {
  return (
    <Layout>
      <section className={videoStyles.section}>
        <Container>
          <div className={videoStyles.grid}>
            <Video
              videoSrcURL="https://www.youtube.com/embed/P4hJczUNYek"
              videoTitle="test-edit-2"
              videoCaption="test-edit-2"
            />
          </div>
        </Container>
      </section>
    </Layout>
  )
}
