import React from "react"
import Container from "../components/container"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Video from "../components/video"
import videoStyles from "../styles/videoStyles.module.scss"

export default function Joe({ data }) {
  return (
    <Layout>
      <section className={videoStyles.section}>
        <Container>
          <div className={videoStyles.grid}>
            <iframe
              src="https://www.youtube-nocookie.com/embed/k2-cvuGmWvc?autoplay=1&mute=1"
              title="Project Airtime | Joe Stone"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
              width="560"
              height="315"
            />
            <h3 className={videoStyles.caption}>Joe Stone</h3>

            {/* <div className={videoStyles.responsiveContainer}>
              <iframe
                className={videoStyles.responsiveIframe}
                src="https://www.youtube-nocookie.com/embed/k2-cvuGmWvc"
                title="Project Airtime | Joe Stone"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
                width="560"
                height="315"
              />
              <h3 className={videoStyles.caption}>Joe Stone</h3>
            </div> */}

            <div className={videoStyles.container}>
              <p>
                back to the <Link to="/#video">video section...</Link>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}
