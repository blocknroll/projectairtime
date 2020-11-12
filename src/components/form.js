import React from "react"
import formStyles from "../styles/formStyles.module.scss"

export default function Form() {
  return (
    <section className={formStyles.section} id="contact">
      <div className={formStyles.container}>
        <h2>Contact Us!</h2>

        <form
          name="projectairtime-contact-form"
          method="POST"
          netlify
          data-netlify="true"
          netlify-honeypot="address"
          action="/success"
        >
          <input
            name="form-name"
            type="hidden"
            value="projectairtime-contact-form"
          />

          <label for="name">
            Name
            <input
              required
              id="name"
              name="name"
              autocomplete="name"
              autocorrect="off"
              type="text"
            />
          </label>

          <label for="phone">
            Phone
            <input
              required
              id="phone"
              name="phone"
              autocomplete="phone"
              autocorrect="off"
              type="text"
            />
          </label>

          <label for="email">
            Email
            <input
              required
              id="email"
              name="email"
              autocomplete="email"
              autocorrect="off"
              type="text"
            />
          </label>

          <fieldset>
            <legend>I would like to...</legend>

            <label>
              go flying!
              <input
                type="radio"
                name="interest"
                id="copilot"
                value="copilot"
              />
              <span></span>
            </label>

            <label>
              be a volunteer!
              <input
                type="radio"
                name="interest"
                id="volunteer"
                value="volunteer"
              />
              <span></span>
            </label>

            <label>
              be a sponsor!
              <input
                type="radio"
                name="interest"
                id="sponsor"
                value="sponsor"
              />
              <span></span>
            </label>
          </fieldset>

          <label for="message">
            Please tell us about yourself...
            <textarea
              id="message"
              name="message"
              type="text"
              autocorrect="off"
              dir="auto"
            ></textarea>
          </label>

          <p style={{ display: "none" }}>
            <label>
              Please don't enter anything here if you are a person:
              <input
                id="address"
                name="address"
                type="text"
                autocomplete="off"
              />
            </label>
          </p>

          <p>
            <input name="submit" type="submit" value="Send It!" />
          </p>
        </form>
      </div>
    </section>
  )
}
