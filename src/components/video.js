import React from "react"
// import Container from "../components/container"
import { Link } from "gatsby"
// import Layout from "../components/layout"
import videoStyles from "../styles/videoStyles.module.scss"

const Video = ({ videoSrcURL, videoTitle, videoCaption }) => (
  // <div className={videoStyles.grid}>

    <div>
      <div className={videoStyles.responsiveContainer}>
        <iframe
          src={videoSrcURL}
          title={videoTitle}
          className={videoStyles.responsiveIframe}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
          width="560"
          height="315"
        />
      </div>

      <h3>{videoCaption}</h3>

      <p>
        back to the <Link to="/#videos">video</Link> section.
      </p>
    </div>


  // </div>
)

export default Video
