import React from "react"
import Video from "../images/banner-video-01-720p60-low.mp4"
import Poster from "../images/04.jpg"
import bannerStyles from "../styles/bannerStyles.module.scss"

export default function Banner() {
  return (
    <div>
      <video
        autoPlay
        className={bannerStyles.video}
        controls
        loop
        muted
        poster={Poster}
        preload="auto"
      >
        <source src={Video} type="video/mp4" />
      </video>

      {/* static Poster image for mobile - via webpack import */}
      <img
        src={Poster}
        className={bannerStyles.poster}
        alt="Chris Santacroce and his co-pilot paragliding at Point of the Mountain in Draper, Utah."
      />
    </div>
  )
}
