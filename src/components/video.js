import React from "react"
import Container from "../components/container"
import videoStyles from "../styles/videoStyles.module.scss"

export default function Video() {
  return (
    <section className={videoStyles.section} id="video">
      <Container>
        <h2>Videos</h2>

        {/* Joe */}
        <div className={videoStyles.responsiveContainer}>
          <iframe
            className={videoStyles.responsiveIframe}
            title="Joe"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/k2-cvuGmWvc"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
          ></iframe>
        </div>

        {/* Lucas */}
        <div className={videoStyles.responsiveContainer}>
          <iframe
            className={videoStyles.responsiveIframe}
            title="Lucas"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5jLUtWCr9fQ"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
          ></iframe>
        </div>

        {/* Jason */}
        <div className={videoStyles.responsiveContainer}>
          <iframe
            className={videoStyles.responsiveIframe}
            title="Jason"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/CJFugtJlC_s"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
          ></iframe>
        </div>

        {/* Serei */}
        <div className={videoStyles.responsiveContainer}>
          <iframe
            className={videoStyles.responsiveIframe}
            title="Serei"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/rX511v45TIU"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
          ></iframe>
        </div>

        {/* Adrienne */}
        <div className={videoStyles.responsiveContainer}>
          <iframe
            className={videoStyles.responsiveIframe}
            title="Adrienne"
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fprojectairtime%2Fvideos%2F963695533748592%2F&show_text=0&width=560"
            width="560"
            height="315"
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="fullscreen"
          ></iframe>
        </div>

        {/* Launching Dad */}
        <div className={videoStyles.responsiveContainer}>
          <iframe
            className={videoStyles.responsiveIframe}
            title="Launching Dad"
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fprojectairtime%2Fvideos%2F1231911276927015%2F&show_text=0&width=560"
            width="560"
            height="315"
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="fullscreen"
          ></iframe>
        </div>

        {/* Donna */}
        <div className={videoStyles.responsiveContainer}>
          <iframe
            className={videoStyles.responsiveIframe}
            title="Donna"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3HqPbHUSeU4"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
          ></iframe>
        </div>

        {/* Larry */}
        <div className={videoStyles.responsiveContainer}>
          <iframe
            className={videoStyles.responsiveIframe}
            title="Larry"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VzrlexXcEtM"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </Container>
    </section>
  )
}
