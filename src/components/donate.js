import React from "react"
import Container from "../components/container"
import donateStyles from "../styles/donateStyles.module.scss"
import navStyles from "../styles/navStyles.module.scss"

export default function Donate() {
  return (
    <section className={donateStyles.section}>
      <div className={navStyles.anchor} id="donate"></div>

      <Container>
        <div className={donateStyles.grid}>
          <h2>Donate To The Cause</h2>

          <form
            action="https://www.paypal.com/donate"
            method="post"
            target="_top"
          >
            <input
              type="hidden"
              name="hosted_button_id"
              value="N9N95E4AKUVZY"
            />
            <input
              className={donateStyles.button}
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
              border="0"
              name="submit"
              title="PayPal - The safer, easier way to pay online!"
              alt="Donate with PayPal button"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypal.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </div>
      </Container>
    </section>
  )
}
