import React from "react"
import Container from "../components/container"
import { Link } from "gatsby"
import aboutStyles from "../styles/aboutStyles.module.scss"
import videoStyles from "../styles/videoStyles.module.scss"
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
            which resulted in him spending some time in a wheelchair.As good
            fortune would have it, he made a 120% recovery but was left with a
            different view of the world and an improved view of life.
          </p>

          <p>
            He went from a wholehearted "look at me and look what I can do" sort
            of attitude to a world where the only question was, What can I do
            for you?
          </p>

          <p>
            Chris answered that question by devoting his life to taking everyone
            flying, with no exception.
          </p>

          <p>Project Airtime was born and now it is his life's focus.</p>

          <p>
            If you would like to contact Chris, please do so using
            projectairtime@gmail.com or{" "}
            <a href="tel:+18017066076">801-706-6076</a>.
          </p>

          {/* My Overdrive by Chris Santacroce | Discount Tire */}
          <div>
            <div className={videoStyles.youtubeThumbnailContainer}>
              <Link to="/myoverdrive">
                <img
                  className={videoStyles.playButton}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAA8FBMVEUAAAAAAADq6ur6+voAAAAuLi4GBgYAAABfX18AAAD19fUAAACenp7z8/Pw8PBOTk4REREAAAAAAAAAAADc3Nyvr69mZmZHR0cAAAAAAAAAAAAWFhYMDAwAAACjo6Nvb29sbGz8/Pzs7Ozp6emxsbFAQEAmJibQ0NDNzc3CwsK8vLyZmZkpKSkAAAAAAAAAAAAAAAAAAAAAAAAAAACgoKA7OzvHx8fFxcWAgIDm5uZYWFhUVFRLS0snJycODg4AAAAAAADl5eXY2NjExMSWlpaVlZUAAAAAAAAAAAAAAACoqKgAAACDg4MyMjIAAAD///9SmF7MAAAAT3RSTlOzAPf9Br20lMqn+7Dc+vnFt6yjgfHhy8NoR0G4tizezs3++Pbiwrvt7Ofm2rxYUU4lGxML3MDq6dP1x8fEvLZ8MfXw6NnZmolgPN+g0757xSwr/gAAA8RJREFUeAGtmGdT21oXhVdUJKsIW+7YuBcKpmBsTIeXlwtJSLL+/7+5xxLMBaxyRPx8Y0bzDPvI2mfvhW8JHG9+/2O++ID/Yv75vnmc9GysaHp0Z+ET1t3RNJtIazwjGqfU0KRFpwdFBOgdd7es2KStlHfdjo6A4sGplEg7DEu6rCj8hFK5DEs81NJFrScIxu6AkQzcMQRPrRSRVg9KqqhcYp/td2vjAlAY17r7ZzaXqJWgxLqWJDoxARRmvaCO9rWBDxjX7QEFvVkBgHkSL7q3AFQVCrZzBiIwctsUKFUA1n2cqOEAWz8p2MkjlvwOBT+3AKcRLdoEMHkg2e8gkU6f5MMEwGaU6IcDjPok95pIoblHsj8CnB+ropYD1DxS/QUJfqmkVwOc1mfRiQXMbdK+ghR5j7TngHXyUaSZwFghN0aQZLRBKmPA1D6I6sBtmbRHkGZkk+VboP5e1AJQIdUrZOBKJYcAWu9EJlAleY5MnJOsAuZ/okOgoJB7yMgeqRSAwzfRqQXMSKWJjDQVcgZYp6+iA0DvkVVkpkr2dOAgFGnF4KR38AV2gvMuaoGoAdyoZB5fIE+qN0AjEJUAl9zGl9gmXaC0FE0dGBtkDqv8X0caOXLDgDMVoqO3v1ah+s8WEgn+h0vgSIhKwVG3EQHJ/+WQTJusACUh8oFBzFFzSUp9eXIA+BqOAZ20jVhRSn2GTeoQmk2gQ54hXpRS3xnZgdDUAZfcTxCl1LdPuhCaErBLdlNECfV1yV3gDibwQNZSRAn11cgyYKIYvLRxiiihvjHZB4rwAY8spIgS6iuQNuBDoJJIESXVRxICJ5PoYlVkvIqsLKU9RpTWfC3tRf6wFzoimISHLf/6L1Jev+wP8jH5B1lCHZilfyKL1E9E6qO9kPloJdrIY2Ib8V7biOYDSlJjW6Q2NgXwtbRWeyHbalOa/6NM88+FzX+K2OtoIXsdYSpE356B2V9ekM9vV/ZkLVe2VgSG6xgi/nKs+Q0cvBu02l8dtNqAdbqu0W/9w2gwHg+zjsf5t/E4YmD35pBm7kUM7MEKMdnIskLMl09PAFNbXWpGWZeaUbDUxK1ZUid+HrtmhYvfXJFf/JR5sPjFraJlkv0uEun2SZZjV1HZ5fh6h4LhLeA0pNZ1RCK1rr8FCO0eBYPZaoDghgFCOwwQJCKNocol3kJEGnrTMJq6iDQWHpeow99hpCEVsty4CiNR3BsInu7XHvvIB1F9mz3vQjqIyh6NyYd1JR+f8EtZw7oQTcSHd2bRB/yieSfiQy3h4X8BIjMI7XNyKGoAAAAASUVORK5CYII="
                  alt="Play Button"
                />
                <img
                  className={videoStyles.youtubeThumbnail}
                  src="https://i.ytimg.com/vi/8fOLPpmteTg/hqdefault.jpg"
                  alt="Thumbnail"
                />
              </Link>
            </div>
            <h3>My Overdrive by Chris Santacroce</h3>
          </div>

          {/* Chris Santacroce | The Line Tahoe */}
          <div>
            <div className={videoStyles.youtubeThumbnailContainer}>
              <Link to="/theline">
                <img
                  className={videoStyles.playButton}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAA8FBMVEUAAAAAAADq6ur6+voAAAAuLi4GBgYAAABfX18AAAD19fUAAACenp7z8/Pw8PBOTk4REREAAAAAAAAAAADc3Nyvr69mZmZHR0cAAAAAAAAAAAAWFhYMDAwAAACjo6Nvb29sbGz8/Pzs7Ozp6emxsbFAQEAmJibQ0NDNzc3CwsK8vLyZmZkpKSkAAAAAAAAAAAAAAAAAAAAAAAAAAACgoKA7OzvHx8fFxcWAgIDm5uZYWFhUVFRLS0snJycODg4AAAAAAADl5eXY2NjExMSWlpaVlZUAAAAAAAAAAAAAAACoqKgAAACDg4MyMjIAAAD///9SmF7MAAAAT3RSTlOzAPf9Br20lMqn+7Dc+vnFt6yjgfHhy8NoR0G4tizezs3++Pbiwrvt7Ofm2rxYUU4lGxML3MDq6dP1x8fEvLZ8MfXw6NnZmolgPN+g0757xSwr/gAAA8RJREFUeAGtmGdT21oXhVdUJKsIW+7YuBcKpmBsTIeXlwtJSLL+/7+5xxLMBaxyRPx8Y0bzDPvI2mfvhW8JHG9+/2O++ID/Yv75vnmc9GysaHp0Z+ET1t3RNJtIazwjGqfU0KRFpwdFBOgdd7es2KStlHfdjo6A4sGplEg7DEu6rCj8hFK5DEs81NJFrScIxu6AkQzcMQRPrRSRVg9KqqhcYp/td2vjAlAY17r7ZzaXqJWgxLqWJDoxARRmvaCO9rWBDxjX7QEFvVkBgHkSL7q3AFQVCrZzBiIwctsUKFUA1n2cqOEAWz8p2MkjlvwOBT+3AKcRLdoEMHkg2e8gkU6f5MMEwGaU6IcDjPok95pIoblHsj8CnB+ropYD1DxS/QUJfqmkVwOc1mfRiQXMbdK+ghR5j7TngHXyUaSZwFghN0aQZLRBKmPA1D6I6sBtmbRHkGZkk+VboP5e1AJQIdUrZOBKJYcAWu9EJlAleY5MnJOsAuZ/okOgoJB7yMgeqRSAwzfRqQXMSKWJjDQVcgZYp6+iA0DvkVVkpkr2dOAgFGnF4KR38AV2gvMuaoGoAdyoZB5fIE+qN0AjEJUAl9zGl9gmXaC0FE0dGBtkDqv8X0caOXLDgDMVoqO3v1ah+s8WEgn+h0vgSIhKwVG3EQHJ/+WQTJusACUh8oFBzFFzSUp9eXIA+BqOAZ20jVhRSn2GTeoQmk2gQ54hXpRS3xnZgdDUAZfcTxCl1LdPuhCaErBLdlNECfV1yV3gDibwQNZSRAn11cgyYKIYvLRxiiihvjHZB4rwAY8spIgS6iuQNuBDoJJIESXVRxICJ5PoYlVkvIqsLKU9RpTWfC3tRf6wFzoimISHLf/6L1Jev+wP8jH5B1lCHZilfyKL1E9E6qO9kPloJdrIY2Ib8V7biOYDSlJjW6Q2NgXwtbRWeyHbalOa/6NM88+FzX+K2OtoIXsdYSpE356B2V9ekM9vV/ZkLVe2VgSG6xgi/nKs+Q0cvBu02l8dtNqAdbqu0W/9w2gwHg+zjsf5t/E4YmD35pBm7kUM7MEKMdnIskLMl09PAFNbXWpGWZeaUbDUxK1ZUid+HrtmhYvfXJFf/JR5sPjFraJlkv0uEun2SZZjV1HZ5fh6h4LhLeA0pNZ1RCK1rr8FCO0eBYPZaoDghgFCOwwQJCKNocol3kJEGnrTMJq6iDQWHpeow99hpCEVsty4CiNR3BsInu7XHvvIB1F9mz3vQjqIyh6NyYd1JR+f8EtZw7oQTcSHd2bRB/yieSfiQy3h4X8BIjMI7XNyKGoAAAAASUVORK5CYII="
                  alt="Play Button"
                />
                <img
                  className={videoStyles.youtubeThumbnail}
                  src="https://i.ytimg.com/vi/RjDtVkBHRHw/hqdefault.jpg"
                  alt="Thumbnail"
                />
              </Link>
            </div>
            <h3>Chris Santacroce | The Line Tahoe</h3>
          </div>

          {/* <div className={videoStyles.responsiveContainer}>
            <iframe
              className={videoStyles.responsiveIframe}
              title="Chris Santacroce | The Line Tahoe"
              type="text/html"
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/RjDtVkBHRHw"
              srcDoc="
              <style>
                *{
                  padding:0;
                  margin:0;
                  overflow:hidden
                }
                img:first-child{
                  position:absolute;
                  top:calc(50vh - 36px);
                  left:calc(50vw - 36px);
                }
                img:nth-child(2){
                  width:100%;
                  height:auto
                }
                a {
                  display: inline-block;
                }
                a:focus,
                a:hover {
                  color: white;
                  outline: 1px dotted white;
                  outline-offset: -40px;
                }
              </style>
              <a href='https://www.youtube-nocookie.com/embed/RjDtVkBHRHw?autoplay=1'>
                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAA8FBMVEUAAAAAAADq6ur6+voAAAAuLi4GBgYAAABfX18AAAD19fUAAACenp7z8/Pw8PBOTk4REREAAAAAAAAAAADc3Nyvr69mZmZHR0cAAAAAAAAAAAAWFhYMDAwAAACjo6Nvb29sbGz8/Pzs7Ozp6emxsbFAQEAmJibQ0NDNzc3CwsK8vLyZmZkpKSkAAAAAAAAAAAAAAAAAAAAAAAAAAACgoKA7OzvHx8fFxcWAgIDm5uZYWFhUVFRLS0snJycODg4AAAAAAADl5eXY2NjExMSWlpaVlZUAAAAAAAAAAAAAAACoqKgAAACDg4MyMjIAAAD///9SmF7MAAAAT3RSTlOzAPf9Br20lMqn+7Dc+vnFt6yjgfHhy8NoR0G4tizezs3++Pbiwrvt7Ofm2rxYUU4lGxML3MDq6dP1x8fEvLZ8MfXw6NnZmolgPN+g0757xSwr/gAAA8RJREFUeAGtmGdT21oXhVdUJKsIW+7YuBcKpmBsTIeXlwtJSLL+/7+5xxLMBaxyRPx8Y0bzDPvI2mfvhW8JHG9+/2O++ID/Yv75vnmc9GysaHp0Z+ET1t3RNJtIazwjGqfU0KRFpwdFBOgdd7es2KStlHfdjo6A4sGplEg7DEu6rCj8hFK5DEs81NJFrScIxu6AkQzcMQRPrRSRVg9KqqhcYp/td2vjAlAY17r7ZzaXqJWgxLqWJDoxARRmvaCO9rWBDxjX7QEFvVkBgHkSL7q3AFQVCrZzBiIwctsUKFUA1n2cqOEAWz8p2MkjlvwOBT+3AKcRLdoEMHkg2e8gkU6f5MMEwGaU6IcDjPok95pIoblHsj8CnB+ropYD1DxS/QUJfqmkVwOc1mfRiQXMbdK+ghR5j7TngHXyUaSZwFghN0aQZLRBKmPA1D6I6sBtmbRHkGZkk+VboP5e1AJQIdUrZOBKJYcAWu9EJlAleY5MnJOsAuZ/okOgoJB7yMgeqRSAwzfRqQXMSKWJjDQVcgZYp6+iA0DvkVVkpkr2dOAgFGnF4KR38AV2gvMuaoGoAdyoZB5fIE+qN0AjEJUAl9zGl9gmXaC0FE0dGBtkDqv8X0caOXLDgDMVoqO3v1ah+s8WEgn+h0vgSIhKwVG3EQHJ/+WQTJusACUh8oFBzFFzSUp9eXIA+BqOAZ20jVhRSn2GTeoQmk2gQ54hXpRS3xnZgdDUAZfcTxCl1LdPuhCaErBLdlNECfV1yV3gDibwQNZSRAn11cgyYKIYvLRxiiihvjHZB4rwAY8spIgS6iuQNuBDoJJIESXVRxICJ5PoYlVkvIqsLKU9RpTWfC3tRf6wFzoimISHLf/6L1Jev+wP8jH5B1lCHZilfyKL1E9E6qO9kPloJdrIY2Ib8V7biOYDSlJjW6Q2NgXwtbRWeyHbalOa/6NM88+FzX+K2OtoIXsdYSpE356B2V9ekM9vV/ZkLVe2VgSG6xgi/nKs+Q0cvBu02l8dtNqAdbqu0W/9w2gwHg+zjsf5t/E4YmD35pBm7kUM7MEKMdnIskLMl09PAFNbXWpGWZeaUbDUxK1ZUid+HrtmhYvfXJFf/JR5sPjFraJlkv0uEun2SZZjV1HZ5fh6h4LhLeA0pNZ1RCK1rr8FCO0eBYPZaoDghgFCOwwQJCKNocol3kJEGnrTMJq6iDQWHpeow99hpCEVsty4CiNR3BsInu7XHvvIB1F9mz3vQjqIyh6NyYd1JR+f8EtZw7oQTcSHd2bRB/yieSfiQy3h4X8BIjMI7XNyKGoAAAAASUVORK5CYII=' alt='Play'>
                <img src='https://i.ytimg.com/vi/RjDtVkBHRHw/maxresdefault.jpg' alt='Thumbnail'>
              </a>"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
            <h3>Chris Santacroce | The Line Tahoe</h3>
          </div> */}

          {/* <div className={videoStyles.responsiveContainer}>
            <iframe
              className={videoStyles.responsiveIframe}
              title="The Finger: Paragliding Kite Trick with Chris Santacroce"
              type="text/html"
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/1S2InrR1pkQ"
              srcDoc="
              <style>
                *{
                  padding:0;
                  margin:0;
                  overflow:hidden
                }
                img:first-child{
                  position:absolute;
                  top:calc(50vh - 36px);
                  left:calc(50vw - 36px);
                }
                img:nth-child(2){
                  width:100%;
                  height:auto
                }
                a {
                  display: inline-block;
                }
                a:focus,
                a:hover {
                  color: white;
                  outline: 1px dotted white;
                  outline-offset: -40px;
                }
              </style>
              <a href='https://www.youtube-nocookie.com/embed/1S2InrR1pkQ?autoplay=1'>
                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAA8FBMVEUAAAAAAADq6ur6+voAAAAuLi4GBgYAAABfX18AAAD19fUAAACenp7z8/Pw8PBOTk4REREAAAAAAAAAAADc3Nyvr69mZmZHR0cAAAAAAAAAAAAWFhYMDAwAAACjo6Nvb29sbGz8/Pzs7Ozp6emxsbFAQEAmJibQ0NDNzc3CwsK8vLyZmZkpKSkAAAAAAAAAAAAAAAAAAAAAAAAAAACgoKA7OzvHx8fFxcWAgIDm5uZYWFhUVFRLS0snJycODg4AAAAAAADl5eXY2NjExMSWlpaVlZUAAAAAAAAAAAAAAACoqKgAAACDg4MyMjIAAAD///9SmF7MAAAAT3RSTlOzAPf9Br20lMqn+7Dc+vnFt6yjgfHhy8NoR0G4tizezs3++Pbiwrvt7Ofm2rxYUU4lGxML3MDq6dP1x8fEvLZ8MfXw6NnZmolgPN+g0757xSwr/gAAA8RJREFUeAGtmGdT21oXhVdUJKsIW+7YuBcKpmBsTIeXlwtJSLL+/7+5xxLMBaxyRPx8Y0bzDPvI2mfvhW8JHG9+/2O++ID/Yv75vnmc9GysaHp0Z+ET1t3RNJtIazwjGqfU0KRFpwdFBOgdd7es2KStlHfdjo6A4sGplEg7DEu6rCj8hFK5DEs81NJFrScIxu6AkQzcMQRPrRSRVg9KqqhcYp/td2vjAlAY17r7ZzaXqJWgxLqWJDoxARRmvaCO9rWBDxjX7QEFvVkBgHkSL7q3AFQVCrZzBiIwctsUKFUA1n2cqOEAWz8p2MkjlvwOBT+3AKcRLdoEMHkg2e8gkU6f5MMEwGaU6IcDjPok95pIoblHsj8CnB+ropYD1DxS/QUJfqmkVwOc1mfRiQXMbdK+ghR5j7TngHXyUaSZwFghN0aQZLRBKmPA1D6I6sBtmbRHkGZkk+VboP5e1AJQIdUrZOBKJYcAWu9EJlAleY5MnJOsAuZ/okOgoJB7yMgeqRSAwzfRqQXMSKWJjDQVcgZYp6+iA0DvkVVkpkr2dOAgFGnF4KR38AV2gvMuaoGoAdyoZB5fIE+qN0AjEJUAl9zGl9gmXaC0FE0dGBtkDqv8X0caOXLDgDMVoqO3v1ah+s8WEgn+h0vgSIhKwVG3EQHJ/+WQTJusACUh8oFBzFFzSUp9eXIA+BqOAZ20jVhRSn2GTeoQmk2gQ54hXpRS3xnZgdDUAZfcTxCl1LdPuhCaErBLdlNECfV1yV3gDibwQNZSRAn11cgyYKIYvLRxiiihvjHZB4rwAY8spIgS6iuQNuBDoJJIESXVRxICJ5PoYlVkvIqsLKU9RpTWfC3tRf6wFzoimISHLf/6L1Jev+wP8jH5B1lCHZilfyKL1E9E6qO9kPloJdrIY2Ib8V7biOYDSlJjW6Q2NgXwtbRWeyHbalOa/6NM88+FzX+K2OtoIXsdYSpE356B2V9ekM9vV/ZkLVe2VgSG6xgi/nKs+Q0cvBu02l8dtNqAdbqu0W/9w2gwHg+zjsf5t/E4YmD35pBm7kUM7MEKMdnIskLMl09PAFNbXWpGWZeaUbDUxK1ZUid+HrtmhYvfXJFf/JR5sPjFraJlkv0uEun2SZZjV1HZ5fh6h4LhLeA0pNZ1RCK1rr8FCO0eBYPZaoDghgFCOwwQJCKNocol3kJEGnrTMJq6iDQWHpeow99hpCEVsty4CiNR3BsInu7XHvvIB1F9mz3vQjqIyh6NyYd1JR+f8EtZw7oQTcSHd2bRB/yieSfiQy3h4X8BIjMI7XNyKGoAAAAASUVORK5CYII=' alt='Play'>
                <img src='https://i.ytimg.com/vi/1S2InrR1pkQ/maxresdefault.jpg' alt='Thumbnail'>
              </a>"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
            <h3>The Finger: Paragliding Kite Trick</h3>
          </div> */}
        </div>
      </Container>
    </section>
  )
}
