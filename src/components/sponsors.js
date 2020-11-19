import React from "react"
import Container from "../components/container"
import sponsorStyles from "../styles/sponsorStyles.module.scss"
import navStyles from "../styles/navStyles.module.scss"

export default function Sponsors() {
  return (
    <section className={sponsorStyles.section}>
      <div className={navStyles.anchor} id="sponsors"></div>

      <Container>
        <div className={sponsorStyles.grid}>
          <h2>Sponsors + Supporters</h2>

          <p>
            Project Airtime has many great supporters. It's nearly impossible to
            thank every single contributor but you know who you are. From those
            that "like" and share our videos, to the foundations that fund our
            efforts, every supporter counts. You are Project Airtime! This is
            your organization and we will do everything we can to make you proud
            of it.
          </p>

          <div className={sponsorStyles.subgrid}>
            <p>The Gubelman Foundation</p>
            <p>Taka Investments</p>
            <p>Jonathan Foster</p>
            <p>Shad Coulson</p>
            <p>Curtis Williams</p>
            <p>Crystal, Madison and Cameron Lee</p>
            <p>Matt Hotchkiss</p>
            <p>Julie Williams</p>
            <p>Lori Dirks</p>
            <p>Luanne Plot Hording</p>
            <p>John Schnebeck</p>
            <p>Luke Seile</p>
            <p>Sandefer Family</p>
            <p>Carl Appelin</p>
            <p>The Fabric of America Fund</p>
            <p>Mark Burnett</p>
            <p>Jeff Howard</p>
            <p>Runolfson Family</p>
            <p>John Lau</p>
            <p>Mark and Bo Rich</p>
            <p>Harrison Ruffin</p>
            <p>Jason and Latisha Joseph</p>
            <p>Tom Keefer</p>
            <p>Blake and Olivia Pelton</p>
            <p>Joe Stone</p>
            <p>Tony Lang</p>
            <p>Johnathan Foster</p>
            <p>The Community Foundation of Utah</p>
            <p>Foundation for Free Flight</p>
            <p>Marc Angelo</p>
            <p>Lori Fitzgerald</p>
            <p>Rodrigo Jordan</p>
            <p>Steve Thorne</p>
            <p>Bill Liscomb</p>
            <p>Daniel Kotter</p>
            <p>Grant and Shawna Korgan</p>
            <p>Randy Leggett</p>
            <p>Tom and Patricia Hampton</p>
            <p>Loren Cox</p>
            <p>BecomeCo</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
