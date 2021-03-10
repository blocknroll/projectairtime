import React from "react"
import Container from "../components/container"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Video from "../components/video"
import videoStyles from "../styles/videoStyles.module.scss"

export default function Fred2({ data }) {
  return (
    <Layout>
      <section className={videoStyles.section}>
        <Container>
          <div className={videoStyles.grid}>
            <Video
              videoSrcURL="https://www.youtube.com/embed/1bwiSp_wtno"
              videoTitle="test-edit-1"
              videoCaption="test-edit-1"
            />
          </div>
        </Container>
      </section>
    </Layout>
  )
}
