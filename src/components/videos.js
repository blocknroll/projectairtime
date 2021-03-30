import React from "react"
import Container from "../components/container"
import YoutubeThumbnail from "../components/youtubeThumbnail"
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
            videoId="k2-cvuGmWvc"
            caption="Joe"
          />

          {/* Lucas */}
          <YoutubeThumbnail
            link="/lucas"
            videoId="5jLUtWCr9fQ"
            caption="Lucas"
          />

          {/* Jason */}
          <YoutubeThumbnail
            link="/jason"
            videoId="CJFugtJlC_s"
            caption="Jason"
          />

          {/* Serei */}
          <YoutubeThumbnail
            link="/serei"
            videoId="rX511v45TIU"
            caption="Serei"
          />

          {/* Donna */}
          <YoutubeThumbnail
            link="/donna"
            videoId="3HqPbHUSeU4"
            caption="Donna"
          />

          {/* Larry */}
          <YoutubeThumbnail
            link="/larry"
            videoId="VzrlexXcEtM"
            caption="Larry"
          />
        </div>
      </Container>
    </section>
  )
}
