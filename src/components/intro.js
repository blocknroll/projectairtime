import React from "react"
import { Link } from "gatsby"
import Container from "../components/container"
import introStyles from "../styles/introStyles.module.scss"
import navStyles from "../styles/navStyles.module.scss"

export default function Intro() {
  return (
    <section className={introStyles.section}>
      <div className={navStyles.anchor} id="intro"></div>

      <Container>
        <div className={introStyles.grid}>
          <h2>What is Project Airtime?</h2>
          <p>
            Project Airtime is a Nevada 501(c)(3) non-profit based in Draper,
            Utah. We take EVERYONE flying. When we say EVERYONE, we mean it. No
            exclusions. From special needs individuals to those with brain and
            spinal cord injuries. Individuals with illness, as well as the
            elderly and veterans. Our co-pilots have one thing in common, they
            want to fly!
          </p>
          <h2>How Do I Go Flying?</h2>
          <p>
            Submit the co-pilot <Link to="/#contact">form</Link> and Chris will
            contact you to work out your Project Airtime flight details. You'll
            go over travel and lodging logistics, as well as any flying
            specifics. If you have a question about flying, he has the answer.
            Flying normally takes place at Point of the Mountain, Utah, but can
            be arranged in other locations as well.
          </p>
          <h2>How Can I Help Out?</h2>
          <p>
            We're always looking for people or organizations that are willing to
            volunteer time/skill or become a sponsor. If you have a skill that
            you think would be of service to the team, please fill out our{" "}
            <Link to="/#contact">form</Link> below, or shoot us an email and
            we'll be in touch. We're currently looking for people with expertise
            in partnerships, promotions and fundraising, though all support is
            welcome.
          </p>
        </div>
      </Container>
    </section>
  )
}
