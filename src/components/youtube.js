import React from "react"
import { Link } from "gatsby"
import videoStyles from "../styles/videoStyles.module.scss"

const Youtube = ({ videoSrcURL, videoTitle, videoCaption }) => (
    <div>
      <div className={videoStyles.youtubeIframeContainer}>
        <iframe
          src={videoSrcURL}
          title={videoTitle}
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
)

export default Youtube
