import React from "react"
import Container from "../components/container"
import YoutubeThumbnail from "../components/youtubeThumbnail"
import joestoneYoutubeThumbnail from "../images/joestone-youtube-thumbnail.jpg"
import lucasYoutubeThumbnail from "../images/lucas-youtube-thumbnail.jpg"
import jasonYoutubeThumbnail from "../images/jason-youtube-thumbnail.jpg"
import sereiYoutubeThumbnail from "../images/serei-youtube-thumbnail.jpg"
import donnaYoutubeThumbnail from "../images/donna-youtube-thumbnail.jpg"
import larryYoutubeThumbnail from "../images/larry-youtube-thumbnail.jpg"
import videoStyles from "../styles/videoStyles.module.scss"
import navStyles from "../styles/navStyles.module.scss"

export default function Videos() {
  return (
    <section className={videoStyles.section}>
      <div className={navStyles.anchor} id="videos"></div>

      <Container>
        <div className={videoStyles.grid}>
          <h2>Videos</h2>

          {/* Joe Stone */}
          <YoutubeThumbnail
            link="/joestone"
            src={joestoneYoutubeThumbnail}
            caption="Joe"
          />

          {/* Lucas */}
          <YoutubeThumbnail
            link="/lucas"
            src={lucasYoutubeThumbnail}
            caption="Lucas"
          />

          {/* Jason */}
          <YoutubeThumbnail
            link="/jason"
            src={jasonYoutubeThumbnail}
            caption="Jason"
          />

          {/* Serei */}
          <YoutubeThumbnail
            link="/serei"
            src={sereiYoutubeThumbnail}
            caption="Serei"
          />

          {/* Donna */}
          <YoutubeThumbnail
            link="/donna"
            src={donnaYoutubeThumbnail}
            caption="Donna"
          />

          {/* Larry */}
          <YoutubeThumbnail
            link="/larry"
            src={larryYoutubeThumbnail}
            caption="Larry"
          />
        </div>
      </Container>
    </section>
  )
}
