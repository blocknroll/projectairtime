import React from "react"
import Container from "../components/container"
import { Link } from "gatsby"
import YoutubeThumbnail from "../components/youtubeThumbnail"
import aboutStyles from "../styles/aboutStyles.module.scss"
import navStyles from "../styles/navStyles.module.scss"

export default function About() {
  return (
    <section className={aboutStyles.section}>
      <div className={navStyles.anchor} id="about"></div>

      <Container>
        <div className={aboutStyles.grid}>
          <h2>About Us</h2>
          <p>
            Chris Santacroce is a 42-year-old father of two who resides in
            Draper, Utah. He is from Colorado but has spent the last 25 years in
            Utah and now calls it his home. He has been a full-time paragliding
            professional since 1992 and spent 13 of those years as a Red Bull
            athlete traveling the world to showcase free flying sports in
            general. He flies everything from airplanes to powered and unpowered
            hang gliders – paragliders, paramotors and has hundreds of sky dives
            and BASE jumps.
          </p>

          <p>
            In 2000-something Chris suffered a life altering spinal cord injury
            which resulted in him spending some time in a wheelchair. As good
            fortune would have it, he made a 120% recovery but was left with a
            different view of the world and an improved view of life.
          </p>

          <p>
            He went from a wholehearted "look at me and look what I can do" sort
            of attitude to a world where the only question was, "What can I do
            for you?"
          </p>

          <p>
            Chris answered that question by devoting his life to taking everyone
            flying, with no exception.
          </p>

          <p>Project Airtime was born and now it is his life's focus.</p>

          <p>
            If you would like to contact Chris, please do so by using our{" "}
            <Link to="/#contact">contact form.</Link> Or you can email us at
            projectairtime@gmail.com or call us at{" "}
            <a href="tel:+18017066076">801-706-6076</a>.
          </p>

          {/* My Overdrive by Chris Santacroce | Discount Tire */}
          <YoutubeThumbnail
            link="/myoverdrive"
            videoId="8fOLPpmteTg"
            caption="My Overdrive by Chris Santacroce"
          />

          {/* Chris Santacroce | The Line Tahoe */}
          <YoutubeThumbnail
            link="/theline"
            videoId="RjDtVkBHRHw"
            caption="Chris Santacroce | The Line Tahoe"
          />

          {/* The Finger: Paragliding Kite Trick with Chris Santacroce */}
          <YoutubeThumbnail
            link="/thefinger"
            videoId="1S2InrR1pkQ"
            caption="Paragliding Kite Trick with Chris Santacroce"
          />
        </div>
      </Container>
    </section>
  )
}
