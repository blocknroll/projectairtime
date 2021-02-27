import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Container from "../components/container"
import videoStyles from "../styles/videoStyles.module.scss"

export default function Success({ data }) {
  return (
    <Layout>
      <section className={videoStyles.section}>
        <Container>
          <div className={videoStyles.grid}>
            <h2>Videos</h2>

            <div className={videoStyles.responsiveContainer}>
              <iframe
                title="Project Airtime | Joe Stone"
                className={videoStyles.responsiveIframe}
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/k2-cvuGmWvc"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h3 className={videoStyles.caption}>Joe Stone</h3>
            </div>

            <div className={videoStyles.responsiveContainer}>
              <iframe
                title="Project Airtime | Lucas"
                className={videoStyles.responsiveIframe}
                width="560"
                height="315"
                src="https://www.youtube.com/embed/5jLUtWCr9fQ?playsinline=1"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="1"
                type="text/html"
              ></iframe>
              <h3 className={videoStyles.caption}>Lucas</h3>
            </div>

            <div className={videoStyles.responsiveContainer}>
              <iframe
                title="Project Airtime | Jason"
                className={videoStyles.responsiveIframe}
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/CJFugtJlC_s"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h3 className={videoStyles.caption}>Jason</h3>
            </div>

            <div className={videoStyles.responsiveContainer}>
              <iframe
                title="Project Airtime | Serei"
                className={videoStyles.responsiveIframe}
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/rX511v45TIU"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h3 className={videoStyles.caption}>Serei</h3>
            </div>

            <div className={videoStyles.responsiveContainer}>
              <iframe
                title="Project Airtime | Donna"
                className={videoStyles.responsiveIframe}
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/3HqPbHUSeU4"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h3 className={videoStyles.caption}>Donna</h3>
            </div>

            <div className={videoStyles.responsiveContainer}>
              <iframe
                title="Project Airtime | Larry"
                className={videoStyles.responsiveIframe}
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/VzrlexXcEtM"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h3 className={videoStyles.caption}>Larry</h3>
            </div>

            <div className={videoStyles.container}>
              <p>
                back to the <Link to="/">homepage.</Link>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}
