import React from "react"
import footerStyles from "../styles/footerStyles.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons"
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons"
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons"

const facebook = <FontAwesomeIcon icon={faFacebookSquare} />
const youtube = <FontAwesomeIcon icon={faYoutubeSquare} />
const twitter = <FontAwesomeIcon icon={faTwitterSquare} />
const instagram = <FontAwesomeIcon icon={faInstagramSquare} />

export default function Footer() {
  return (
    <section className={footerStyles.section}>
      <div className={footerStyles.container}>
        <div className={footerStyles.address}>
          <p>
            Project Airtime
            <br />
            projectairtime@gmail.com
            <br />
            801-706-6076
          </p>
        </div>

        <div className={footerStyles.social}>
          <div>
            <a
              href="https://www.facebook.com/projectairtime"
              target="_blank"
              rel="noopener noreferrer"
            >
              {facebook}
            </a>
          </div>

          <div>
            <a
              href="https://www.youtube.com/channel/UCh1j05Iv2ITUV-7ve4UfrpA"
              target="_blank"
              rel="noopener noreferrer"
            >
              {youtube}
            </a>
          </div>

          <div>
            <a
              href="https://twitter.com/projectairtime"
              target="_blank"
              rel="noopener noreferrer"
            >
              {twitter}
            </a>
          </div>

          <div>
            <a
              href="https://twitter.com/projectairtime"
              target="_blank"
              rel="noopener noreferrer"
            >
              {instagram}
            </a>
          </div>
        </div>

        <div className={footerStyles.copyright}>
          <p>©2020 Project Airtime</p>
        </div>
      </div>
    </section>
  )
}
