import React from "react"
import Container from "../components/container"
import newsStyles from "../styles/newsStyles.module.scss"
import navStyles from "../styles/navStyles.module.scss"
import geneticAllianceLogo from "../images/news/genetic_alliance_logo.png"
import issaquahReporterLogo from "../images/news/issaquah_reporter_logo.png"
import kutvLogo from "../images/news/kutv_logo.png"
import mailOnlineLogo from "../images/news/mail_online_logo.gif"
import pioneerPressLogo from "../images/news/pioneer_press_logo.png"

export default function News() {
  return (
    <section className={newsStyles.section}>
      <div className={navStyles.anchor} id="news"></div>

      <Container>
        <div className={newsStyles.grid}>
          <h2>In the News</h2>

          <div>
            <a
              href="https://kutv.com/features/pay-it-forward/flying-high-with-project-airtime"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={kutvLogo} className={newsStyles.logo} alt="KUTV logo" />
            </a>
          </div>

          <div>
            <a
              href="http://www.eparent.com/wellness/everyone-can-fly/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={geneticAllianceLogo}
                className={newsStyles.logo}
                alt="Genetic Alliance logo"
              />
            </a>
          </div>

          <div>
            <a
              href="https://www.twincities.com/2015/06/09/film-inspired-apple-valley-quadriplegic-his-own-story-could-do-the-same/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={pioneerPressLogo}
                className={newsStyles.logo}
                alt="Pioneer Press logo"
              />
            </a>
          </div>

          <div>
            <a
              href="https://www.issaquahreporter.com/news/flying-high-disabled-get-to-experience-thrill-of-paragliding/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={issaquahReporterLogo}
                className={newsStyles.logo}
                alt="Issaquah Reporter logo"
              />
            </a>
          </div>

          <div>
            <a
              href="http://www.dailymail.co.uk/news/article-4051722/Daredevil-paralyzed-extreme-sports-accident-returned-base-jumping-six-years-later-t-use-limbs.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={mailOnlineLogo}
                className={newsStyles.logo}
                alt="Mail Online logo"
              />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
