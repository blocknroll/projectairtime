import React from "react"
import Container from "../components/container"
import { Link } from "gatsby"
import videoStyles from "../styles/videoStyles.module.scss"
import navStyles from "../styles/navStyles.module.scss"

export default function Video() {
  return (
    <section className={videoStyles.section}>
      <div className={navStyles.anchor} id="video"></div>

      <Container>
        <div className={videoStyles.grid}>
          <h2>Videos</h2>

          {/* Joe */}
          {/* <div className={videoStyles.responsiveContainer}> */}
          <div>
            <Link to="/joestone">
              {/* <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAA8FBMVEUAAAAAAADq6ur6+voAAAAuLi4GBgYAAABfX18AAAD19fUAAACenp7z8/Pw8PBOTk4REREAAAAAAAAAAADc3Nyvr69mZmZHR0cAAAAAAAAAAAAWFhYMDAwAAACjo6Nvb29sbGz8/Pzs7Ozp6emxsbFAQEAmJibQ0NDNzc3CwsK8vLyZmZkpKSkAAAAAAAAAAAAAAAAAAAAAAAAAAACgoKA7OzvHx8fFxcWAgIDm5uZYWFhUVFRLS0snJycODg4AAAAAAADl5eXY2NjExMSWlpaVlZUAAAAAAAAAAAAAAACoqKgAAACDg4MyMjIAAAD///9SmF7MAAAAT3RSTlOzAPf9Br20lMqn+7Dc+vnFt6yjgfHhy8NoR0G4tizezs3++Pbiwrvt7Ofm2rxYUU4lGxML3MDq6dP1x8fEvLZ8MfXw6NnZmolgPN+g0757xSwr/gAAA8RJREFUeAGtmGdT21oXhVdUJKsIW+7YuBcKpmBsTIeXlwtJSLL+/7+5xxLMBaxyRPx8Y0bzDPvI2mfvhW8JHG9+/2O++ID/Yv75vnmc9GysaHp0Z+ET1t3RNJtIazwjGqfU0KRFpwdFBOgdd7es2KStlHfdjo6A4sGplEg7DEu6rCj8hFK5DEs81NJFrScIxu6AkQzcMQRPrRSRVg9KqqhcYp/td2vjAlAY17r7ZzaXqJWgxLqWJDoxARRmvaCO9rWBDxjX7QEFvVkBgHkSL7q3AFQVCrZzBiIwctsUKFUA1n2cqOEAWz8p2MkjlvwOBT+3AKcRLdoEMHkg2e8gkU6f5MMEwGaU6IcDjPok95pIoblHsj8CnB+ropYD1DxS/QUJfqmkVwOc1mfRiQXMbdK+ghR5j7TngHXyUaSZwFghN0aQZLRBKmPA1D6I6sBtmbRHkGZkk+VboP5e1AJQIdUrZOBKJYcAWu9EJlAleY5MnJOsAuZ/okOgoJB7yMgeqRSAwzfRqQXMSKWJjDQVcgZYp6+iA0DvkVVkpkr2dOAgFGnF4KR38AV2gvMuaoGoAdyoZB5fIE+qN0AjEJUAl9zGl9gmXaC0FE0dGBtkDqv8X0caOXLDgDMVoqO3v1ah+s8WEgn+h0vgSIhKwVG3EQHJ/+WQTJusACUh8oFBzFFzSUp9eXIA+BqOAZ20jVhRSn2GTeoQmk2gQ54hXpRS3xnZgdDUAZfcTxCl1LdPuhCaErBLdlNECfV1yV3gDibwQNZSRAn11cgyYKIYvLRxiiihvjHZB4rwAY8spIgS6iuQNuBDoJJIESXVRxICJ5PoYlVkvIqsLKU9RpTWfC3tRf6wFzoimISHLf/6L1Jev+wP8jH5B1lCHZilfyKL1E9E6qO9kPloJdrIY2Ib8V7biOYDSlJjW6Q2NgXwtbRWeyHbalOa/6NM88+FzX+K2OtoIXsdYSpE356B2V9ekM9vV/ZkLVe2VgSG6xgi/nKs+Q0cvBu02l8dtNqAdbqu0W/9w2gwHg+zjsf5t/E4YmD35pBm7kUM7MEKMdnIskLMl09PAFNbXWpGWZeaUbDUxK1ZUid+HrtmhYvfXJFf/JR5sPjFraJlkv0uEun2SZZjV1HZ5fh6h4LhLeA0pNZ1RCK1rr8FCO0eBYPZaoDghgFCOwwQJCKNocol3kJEGnrTMJq6iDQWHpeow99hpCEVsty4CiNR3BsInu7XHvvIB1F9mz3vQjqIyh6NyYd1JR+f8EtZw7oQTcSHd2bRB/yieSfiQy3h4X8BIjMI7XNyKGoAAAAASUVORK5CYII="
                alt="Play"
              /> */}
              <img
                src="https://i.ytimg.com/vi/k2-cvuGmWvc/hqdefault.jpg"
                alt="Thumbnail"
              />
            </Link>
            <h3>Joe Stone</h3>
          </div>

          {/* Joe */}
          <div className={videoStyles.responsiveContainer}>
            <iframe
              className={videoStyles.responsiveIframe}
              title="Project Airtime | Joe Stone"
              type="text/html"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/k2-cvuGmWvc"
              srcDoc="
                <style>
                  * {
                    padding: 0;
                    margin: 0;
                    overflow: hidden
                  }
                  img:first-child {
                    position: absolute;
                    top: calc(50vh - 36px);
                    left: calc(50vw - 36px);
                  }
                  img:nth-child(2) {
                    width: 100%;
                    height: auto
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
                <a href='https://www.youtube.com/embed/k2-cvuGmWvc'>
                  <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAA8FBMVEUAAAAAAADq6ur6+voAAAAuLi4GBgYAAABfX18AAAD19fUAAACenp7z8/Pw8PBOTk4REREAAAAAAAAAAADc3Nyvr69mZmZHR0cAAAAAAAAAAAAWFhYMDAwAAACjo6Nvb29sbGz8/Pzs7Ozp6emxsbFAQEAmJibQ0NDNzc3CwsK8vLyZmZkpKSkAAAAAAAAAAAAAAAAAAAAAAAAAAACgoKA7OzvHx8fFxcWAgIDm5uZYWFhUVFRLS0snJycODg4AAAAAAADl5eXY2NjExMSWlpaVlZUAAAAAAAAAAAAAAACoqKgAAACDg4MyMjIAAAD///9SmF7MAAAAT3RSTlOzAPf9Br20lMqn+7Dc+vnFt6yjgfHhy8NoR0G4tizezs3++Pbiwrvt7Ofm2rxYUU4lGxML3MDq6dP1x8fEvLZ8MfXw6NnZmolgPN+g0757xSwr/gAAA8RJREFUeAGtmGdT21oXhVdUJKsIW+7YuBcKpmBsTIeXlwtJSLL+/7+5xxLMBaxyRPx8Y0bzDPvI2mfvhW8JHG9+/2O++ID/Yv75vnmc9GysaHp0Z+ET1t3RNJtIazwjGqfU0KRFpwdFBOgdd7es2KStlHfdjo6A4sGplEg7DEu6rCj8hFK5DEs81NJFrScIxu6AkQzcMQRPrRSRVg9KqqhcYp/td2vjAlAY17r7ZzaXqJWgxLqWJDoxARRmvaCO9rWBDxjX7QEFvVkBgHkSL7q3AFQVCrZzBiIwctsUKFUA1n2cqOEAWz8p2MkjlvwOBT+3AKcRLdoEMHkg2e8gkU6f5MMEwGaU6IcDjPok95pIoblHsj8CnB+ropYD1DxS/QUJfqmkVwOc1mfRiQXMbdK+ghR5j7TngHXyUaSZwFghN0aQZLRBKmPA1D6I6sBtmbRHkGZkk+VboP5e1AJQIdUrZOBKJYcAWu9EJlAleY5MnJOsAuZ/okOgoJB7yMgeqRSAwzfRqQXMSKWJjDQVcgZYp6+iA0DvkVVkpkr2dOAgFGnF4KR38AV2gvMuaoGoAdyoZB5fIE+qN0AjEJUAl9zGl9gmXaC0FE0dGBtkDqv8X0caOXLDgDMVoqO3v1ah+s8WEgn+h0vgSIhKwVG3EQHJ/+WQTJusACUh8oFBzFFzSUp9eXIA+BqOAZ20jVhRSn2GTeoQmk2gQ54hXpRS3xnZgdDUAZfcTxCl1LdPuhCaErBLdlNECfV1yV3gDibwQNZSRAn11cgyYKIYvLRxiiihvjHZB4rwAY8spIgS6iuQNuBDoJJIESXVRxICJ5PoYlVkvIqsLKU9RpTWfC3tRf6wFzoimISHLf/6L1Jev+wP8jH5B1lCHZilfyKL1E9E6qO9kPloJdrIY2Ib8V7biOYDSlJjW6Q2NgXwtbRWeyHbalOa/6NM88+FzX+K2OtoIXsdYSpE356B2V9ekM9vV/ZkLVe2VgSG6xgi/nKs+Q0cvBu02l8dtNqAdbqu0W/9w2gwHg+zjsf5t/E4YmD35pBm7kUM7MEKMdnIskLMl09PAFNbXWpGWZeaUbDUxK1ZUid+HrtmhYvfXJFf/JR5sPjFraJlkv0uEun2SZZjV1HZ5fh6h4LhLeA0pNZ1RCK1rr8FCO0eBYPZaoDghgFCOwwQJCKNocol3kJEGnrTMJq6iDQWHpeow99hpCEVsty4CiNR3BsInu7XHvvIB1F9mz3vQjqIyh6NyYd1JR+f8EtZw7oQTcSHd2bRB/yieSfiQy3h4X8BIjMI7XNyKGoAAAAASUVORK5CYII=' alt='Play'>
                  <img src='https://i.ytimg.com/vi/k2-cvuGmWvc/maxresdefault.jpg' alt='Thumbnail'>
                </a>"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
            <h3>Joe Stone</h3>
          </div>

          {/* Lucas */}
          {/* <div className={videoStyles.responsiveContainer}> */}
          <div>
            <a
              // className={videoStyles.responsiveIframe}
              href="https://www.youtube.com/embed/5jLUtWCr9fQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAA8FBMVEUAAAAAAADq6ur6+voAAAAuLi4GBgYAAABfX18AAAD19fUAAACenp7z8/Pw8PBOTk4REREAAAAAAAAAAADc3Nyvr69mZmZHR0cAAAAAAAAAAAAWFhYMDAwAAACjo6Nvb29sbGz8/Pzs7Ozp6emxsbFAQEAmJibQ0NDNzc3CwsK8vLyZmZkpKSkAAAAAAAAAAAAAAAAAAAAAAAAAAACgoKA7OzvHx8fFxcWAgIDm5uZYWFhUVFRLS0snJycODg4AAAAAAADl5eXY2NjExMSWlpaVlZUAAAAAAAAAAAAAAACoqKgAAACDg4MyMjIAAAD///9SmF7MAAAAT3RSTlOzAPf9Br20lMqn+7Dc+vnFt6yjgfHhy8NoR0G4tizezs3++Pbiwrvt7Ofm2rxYUU4lGxML3MDq6dP1x8fEvLZ8MfXw6NnZmolgPN+g0757xSwr/gAAA8RJREFUeAGtmGdT21oXhVdUJKsIW+7YuBcKpmBsTIeXlwtJSLL+/7+5xxLMBaxyRPx8Y0bzDPvI2mfvhW8JHG9+/2O++ID/Yv75vnmc9GysaHp0Z+ET1t3RNJtIazwjGqfU0KRFpwdFBOgdd7es2KStlHfdjo6A4sGplEg7DEu6rCj8hFK5DEs81NJFrScIxu6AkQzcMQRPrRSRVg9KqqhcYp/td2vjAlAY17r7ZzaXqJWgxLqWJDoxARRmvaCO9rWBDxjX7QEFvVkBgHkSL7q3AFQVCrZzBiIwctsUKFUA1n2cqOEAWz8p2MkjlvwOBT+3AKcRLdoEMHkg2e8gkU6f5MMEwGaU6IcDjPok95pIoblHsj8CnB+ropYD1DxS/QUJfqmkVwOc1mfRiQXMbdK+ghR5j7TngHXyUaSZwFghN0aQZLRBKmPA1D6I6sBtmbRHkGZkk+VboP5e1AJQIdUrZOBKJYcAWu9EJlAleY5MnJOsAuZ/okOgoJB7yMgeqRSAwzfRqQXMSKWJjDQVcgZYp6+iA0DvkVVkpkr2dOAgFGnF4KR38AV2gvMuaoGoAdyoZB5fIE+qN0AjEJUAl9zGl9gmXaC0FE0dGBtkDqv8X0caOXLDgDMVoqO3v1ah+s8WEgn+h0vgSIhKwVG3EQHJ/+WQTJusACUh8oFBzFFzSUp9eXIA+BqOAZ20jVhRSn2GTeoQmk2gQ54hXpRS3xnZgdDUAZfcTxCl1LdPuhCaErBLdlNECfV1yV3gDibwQNZSRAn11cgyYKIYvLRxiiihvjHZB4rwAY8spIgS6iuQNuBDoJJIESXVRxICJ5PoYlVkvIqsLKU9RpTWfC3tRf6wFzoimISHLf/6L1Jev+wP8jH5B1lCHZilfyKL1E9E6qO9kPloJdrIY2Ib8V7biOYDSlJjW6Q2NgXwtbRWeyHbalOa/6NM88+FzX+K2OtoIXsdYSpE356B2V9ekM9vV/ZkLVe2VgSG6xgi/nKs+Q0cvBu02l8dtNqAdbqu0W/9w2gwHg+zjsf5t/E4YmD35pBm7kUM7MEKMdnIskLMl09PAFNbXWpGWZeaUbDUxK1ZUid+HrtmhYvfXJFf/JR5sPjFraJlkv0uEun2SZZjV1HZ5fh6h4LhLeA0pNZ1RCK1rr8FCO0eBYPZaoDghgFCOwwQJCKNocol3kJEGnrTMJq6iDQWHpeow99hpCEVsty4CiNR3BsInu7XHvvIB1F9mz3vQjqIyh6NyYd1JR+f8EtZw7oQTcSHd2bRB/yieSfiQy3h4X8BIjMI7XNyKGoAAAAASUVORK5CYII="
                alt="Play"
              /> */}
              <img
                src="https://i.ytimg.com/vi/5jLUtWCr9fQ/hqdefault.jpg"
                alt="Thumbnail"
              />
            </a>
            <h3>Lucas</h3>
          </div>

          {/* Lucas */}
          <div className={videoStyles.responsiveContainer}>
            <iframe
              className={videoStyles.responsiveIframe}
              title="Project Airtime | Lucas"
              type="text/html"
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/5jLUtWCr9fQ"
              srcDoc="
                <style>
                  * {
                    padding: 0;
                    margin: 0;
                    overflow: hidden
                  }
                  img:first-child {
                    position:absolute;
                    top: calc(50vh - 36px);
                    left: calc(50vw - 36px);
                  }
                  img:nth-child(2) {
                    width: 100%;
                    height: auto
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
                <a href='https://www.youtube-nocookie.com/embed/5jLUtWCr9fQ?autoplay=1'>
                  <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAA8FBMVEUAAAAAAADq6ur6+voAAAAuLi4GBgYAAABfX18AAAD19fUAAACenp7z8/Pw8PBOTk4REREAAAAAAAAAAADc3Nyvr69mZmZHR0cAAAAAAAAAAAAWFhYMDAwAAACjo6Nvb29sbGz8/Pzs7Ozp6emxsbFAQEAmJibQ0NDNzc3CwsK8vLyZmZkpKSkAAAAAAAAAAAAAAAAAAAAAAAAAAACgoKA7OzvHx8fFxcWAgIDm5uZYWFhUVFRLS0snJycODg4AAAAAAADl5eXY2NjExMSWlpaVlZUAAAAAAAAAAAAAAACoqKgAAACDg4MyMjIAAAD///9SmF7MAAAAT3RSTlOzAPf9Br20lMqn+7Dc+vnFt6yjgfHhy8NoR0G4tizezs3++Pbiwrvt7Ofm2rxYUU4lGxML3MDq6dP1x8fEvLZ8MfXw6NnZmolgPN+g0757xSwr/gAAA8RJREFUeAGtmGdT21oXhVdUJKsIW+7YuBcKpmBsTIeXlwtJSLL+/7+5xxLMBaxyRPx8Y0bzDPvI2mfvhW8JHG9+/2O++ID/Yv75vnmc9GysaHp0Z+ET1t3RNJtIazwjGqfU0KRFpwdFBOgdd7es2KStlHfdjo6A4sGplEg7DEu6rCj8hFK5DEs81NJFrScIxu6AkQzcMQRPrRSRVg9KqqhcYp/td2vjAlAY17r7ZzaXqJWgxLqWJDoxARRmvaCO9rWBDxjX7QEFvVkBgHkSL7q3AFQVCrZzBiIwctsUKFUA1n2cqOEAWz8p2MkjlvwOBT+3AKcRLdoEMHkg2e8gkU6f5MMEwGaU6IcDjPok95pIoblHsj8CnB+ropYD1DxS/QUJfqmkVwOc1mfRiQXMbdK+ghR5j7TngHXyUaSZwFghN0aQZLRBKmPA1D6I6sBtmbRHkGZkk+VboP5e1AJQIdUrZOBKJYcAWu9EJlAleY5MnJOsAuZ/okOgoJB7yMgeqRSAwzfRqQXMSKWJjDQVcgZYp6+iA0DvkVVkpkr2dOAgFGnF4KR38AV2gvMuaoGoAdyoZB5fIE+qN0AjEJUAl9zGl9gmXaC0FE0dGBtkDqv8X0caOXLDgDMVoqO3v1ah+s8WEgn+h0vgSIhKwVG3EQHJ/+WQTJusACUh8oFBzFFzSUp9eXIA+BqOAZ20jVhRSn2GTeoQmk2gQ54hXpRS3xnZgdDUAZfcTxCl1LdPuhCaErBLdlNECfV1yV3gDibwQNZSRAn11cgyYKIYvLRxiiihvjHZB4rwAY8spIgS6iuQNuBDoJJIESXVRxICJ5PoYlVkvIqsLKU9RpTWfC3tRf6wFzoimISHLf/6L1Jev+wP8jH5B1lCHZilfyKL1E9E6qO9kPloJdrIY2Ib8V7biOYDSlJjW6Q2NgXwtbRWeyHbalOa/6NM88+FzX+K2OtoIXsdYSpE356B2V9ekM9vV/ZkLVe2VgSG6xgi/nKs+Q0cvBu02l8dtNqAdbqu0W/9w2gwHg+zjsf5t/E4YmD35pBm7kUM7MEKMdnIskLMl09PAFNbXWpGWZeaUbDUxK1ZUid+HrtmhYvfXJFf/JR5sPjFraJlkv0uEun2SZZjV1HZ5fh6h4LhLeA0pNZ1RCK1rr8FCO0eBYPZaoDghgFCOwwQJCKNocol3kJEGnrTMJq6iDQWHpeow99hpCEVsty4CiNR3BsInu7XHvvIB1F9mz3vQjqIyh6NyYd1JR+f8EtZw7oQTcSHd2bRB/yieSfiQy3h4X8BIjMI7XNyKGoAAAAASUVORK5CYII=' alt='Play'>
                  <img src='https://i.ytimg.com/vi/5jLUtWCr9fQ/maxresdefault.jpg' alt='Thumbnail'>
                </a>"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
            <h3>Lucas</h3>
          </div>

          {/* Jason */}
          <div className={videoStyles.responsiveContainer}>
            <iframe
              className={videoStyles.responsiveIframe}
              title="Project Airtime | Jason"
              type="text/html"
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/CJFugtJlC_s"
              srcDoc="
                <style>
                  * {
                    padding: 0;
                    margin: 0;
                    overflow: hidden
                  }
                  img:first-child {
                    position:absolute;
                    top: calc(50vh - 36px);
                    left: calc(50vw - 36px);
                  }
                  img:nth-child(2) {
                    width: 100%;
                    height: auto
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
                <a href='https://www.youtube-nocookie.com/embed/CJFugtJlC_s?autoplay=1'>
                  <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAA8FBMVEUAAAAAAADq6ur6+voAAAAuLi4GBgYAAABfX18AAAD19fUAAACenp7z8/Pw8PBOTk4REREAAAAAAAAAAADc3Nyvr69mZmZHR0cAAAAAAAAAAAAWFhYMDAwAAACjo6Nvb29sbGz8/Pzs7Ozp6emxsbFAQEAmJibQ0NDNzc3CwsK8vLyZmZkpKSkAAAAAAAAAAAAAAAAAAAAAAAAAAACgoKA7OzvHx8fFxcWAgIDm5uZYWFhUVFRLS0snJycODg4AAAAAAADl5eXY2NjExMSWlpaVlZUAAAAAAAAAAAAAAACoqKgAAACDg4MyMjIAAAD///9SmF7MAAAAT3RSTlOzAPf9Br20lMqn+7Dc+vnFt6yjgfHhy8NoR0G4tizezs3++Pbiwrvt7Ofm2rxYUU4lGxML3MDq6dP1x8fEvLZ8MfXw6NnZmolgPN+g0757xSwr/gAAA8RJREFUeAGtmGdT21oXhVdUJKsIW+7YuBcKpmBsTIeXlwtJSLL+/7+5xxLMBaxyRPx8Y0bzDPvI2mfvhW8JHG9+/2O++ID/Yv75vnmc9GysaHp0Z+ET1t3RNJtIazwjGqfU0KRFpwdFBOgdd7es2KStlHfdjo6A4sGplEg7DEu6rCj8hFK5DEs81NJFrScIxu6AkQzcMQRPrRSRVg9KqqhcYp/td2vjAlAY17r7ZzaXqJWgxLqWJDoxARRmvaCO9rWBDxjX7QEFvVkBgHkSL7q3AFQVCrZzBiIwctsUKFUA1n2cqOEAWz8p2MkjlvwOBT+3AKcRLdoEMHkg2e8gkU6f5MMEwGaU6IcDjPok95pIoblHsj8CnB+ropYD1DxS/QUJfqmkVwOc1mfRiQXMbdK+ghR5j7TngHXyUaSZwFghN0aQZLRBKmPA1D6I6sBtmbRHkGZkk+VboP5e1AJQIdUrZOBKJYcAWu9EJlAleY5MnJOsAuZ/okOgoJB7yMgeqRSAwzfRqQXMSKWJjDQVcgZYp6+iA0DvkVVkpkr2dOAgFGnF4KR38AV2gvMuaoGoAdyoZB5fIE+qN0AjEJUAl9zGl9gmXaC0FE0dGBtkDqv8X0caOXLDgDMVoqO3v1ah+s8WEgn+h0vgSIhKwVG3EQHJ/+WQTJusACUh8oFBzFFzSUp9eXIA+BqOAZ20jVhRSn2GTeoQmk2gQ54hXpRS3xnZgdDUAZfcTxCl1LdPuhCaErBLdlNECfV1yV3gDibwQNZSRAn11cgyYKIYvLRxiiihvjHZB4rwAY8spIgS6iuQNuBDoJJIESXVRxICJ5PoYlVkvIqsLKU9RpTWfC3tRf6wFzoimISHLf/6L1Jev+wP8jH5B1lCHZilfyKL1E9E6qO9kPloJdrIY2Ib8V7biOYDSlJjW6Q2NgXwtbRWeyHbalOa/6NM88+FzX+K2OtoIXsdYSpE356B2V9ekM9vV/ZkLVe2VgSG6xgi/nKs+Q0cvBu02l8dtNqAdbqu0W/9w2gwHg+zjsf5t/E4YmD35pBm7kUM7MEKMdnIskLMl09PAFNbXWpGWZeaUbDUxK1ZUid+HrtmhYvfXJFf/JR5sPjFraJlkv0uEun2SZZjV1HZ5fh6h4LhLeA0pNZ1RCK1rr8FCO0eBYPZaoDghgFCOwwQJCKNocol3kJEGnrTMJq6iDQWHpeow99hpCEVsty4CiNR3BsInu7XHvvIB1F9mz3vQjqIyh6NyYd1JR+f8EtZw7oQTcSHd2bRB/yieSfiQy3h4X8BIjMI7XNyKGoAAAAASUVORK5CYII=' alt='Play'>
                  <img src='https://i.ytimg.com/vi/CJFugtJlC_s/maxresdefault.jpg' alt='Thumbnail'>
                </a>"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
            <h3>Jason</h3>
          </div>

          {/* Serei */}
          <div className={videoStyles.responsiveContainer}>
            <iframe
              className={videoStyles.responsiveIframe}
              title="Project Airtime | Serei"
              type="text/html"
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/rX511v45TIU"
              srcDoc="
                <style>
                  * {
                    padding: 0;
                    margin: 0;
                    overflow: hidden
                  }
                  img:first-child {
                    position:absolute;
                    top: calc(50vh - 36px);
                    left: calc(50vw - 36px);
                  }
                  img:nth-child(2) {
                    width: 100%;
                    height: auto
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
                <a href='https://www.youtube-nocookie.com/embed/rX511v45TIU?autoplay=1'>
                  <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAA8FBMVEUAAAAAAADq6ur6+voAAAAuLi4GBgYAAABfX18AAAD19fUAAACenp7z8/Pw8PBOTk4REREAAAAAAAAAAADc3Nyvr69mZmZHR0cAAAAAAAAAAAAWFhYMDAwAAACjo6Nvb29sbGz8/Pzs7Ozp6emxsbFAQEAmJibQ0NDNzc3CwsK8vLyZmZkpKSkAAAAAAAAAAAAAAAAAAAAAAAAAAACgoKA7OzvHx8fFxcWAgIDm5uZYWFhUVFRLS0snJycODg4AAAAAAADl5eXY2NjExMSWlpaVlZUAAAAAAAAAAAAAAACoqKgAAACDg4MyMjIAAAD///9SmF7MAAAAT3RSTlOzAPf9Br20lMqn+7Dc+vnFt6yjgfHhy8NoR0G4tizezs3++Pbiwrvt7Ofm2rxYUU4lGxML3MDq6dP1x8fEvLZ8MfXw6NnZmolgPN+g0757xSwr/gAAA8RJREFUeAGtmGdT21oXhVdUJKsIW+7YuBcKpmBsTIeXlwtJSLL+/7+5xxLMBaxyRPx8Y0bzDPvI2mfvhW8JHG9+/2O++ID/Yv75vnmc9GysaHp0Z+ET1t3RNJtIazwjGqfU0KRFpwdFBOgdd7es2KStlHfdjo6A4sGplEg7DEu6rCj8hFK5DEs81NJFrScIxu6AkQzcMQRPrRSRVg9KqqhcYp/td2vjAlAY17r7ZzaXqJWgxLqWJDoxARRmvaCO9rWBDxjX7QEFvVkBgHkSL7q3AFQVCrZzBiIwctsUKFUA1n2cqOEAWz8p2MkjlvwOBT+3AKcRLdoEMHkg2e8gkU6f5MMEwGaU6IcDjPok95pIoblHsj8CnB+ropYD1DxS/QUJfqmkVwOc1mfRiQXMbdK+ghR5j7TngHXyUaSZwFghN0aQZLRBKmPA1D6I6sBtmbRHkGZkk+VboP5e1AJQIdUrZOBKJYcAWu9EJlAleY5MnJOsAuZ/okOgoJB7yMgeqRSAwzfRqQXMSKWJjDQVcgZYp6+iA0DvkVVkpkr2dOAgFGnF4KR38AV2gvMuaoGoAdyoZB5fIE+qN0AjEJUAl9zGl9gmXaC0FE0dGBtkDqv8X0caOXLDgDMVoqO3v1ah+s8WEgn+h0vgSIhKwVG3EQHJ/+WQTJusACUh8oFBzFFzSUp9eXIA+BqOAZ20jVhRSn2GTeoQmk2gQ54hXpRS3xnZgdDUAZfcTxCl1LdPuhCaErBLdlNECfV1yV3gDibwQNZSRAn11cgyYKIYvLRxiiihvjHZB4rwAY8spIgS6iuQNuBDoJJIESXVRxICJ5PoYlVkvIqsLKU9RpTWfC3tRf6wFzoimISHLf/6L1Jev+wP8jH5B1lCHZilfyKL1E9E6qO9kPloJdrIY2Ib8V7biOYDSlJjW6Q2NgXwtbRWeyHbalOa/6NM88+FzX+K2OtoIXsdYSpE356B2V9ekM9vV/ZkLVe2VgSG6xgi/nKs+Q0cvBu02l8dtNqAdbqu0W/9w2gwHg+zjsf5t/E4YmD35pBm7kUM7MEKMdnIskLMl09PAFNbXWpGWZeaUbDUxK1ZUid+HrtmhYvfXJFf/JR5sPjFraJlkv0uEun2SZZjV1HZ5fh6h4LhLeA0pNZ1RCK1rr8FCO0eBYPZaoDghgFCOwwQJCKNocol3kJEGnrTMJq6iDQWHpeow99hpCEVsty4CiNR3BsInu7XHvvIB1F9mz3vQjqIyh6NyYd1JR+f8EtZw7oQTcSHd2bRB/yieSfiQy3h4X8BIjMI7XNyKGoAAAAASUVORK5CYII=' alt='Play'>
                  <img src='https://i.ytimg.com/vi/rX511v45TIU/maxresdefault.jpg' alt='Thumbnail'>
                </a>"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
            <h3>Serei</h3>
          </div>

          {/* Donna */}
          <div className={videoStyles.responsiveContainer}>
            <iframe
              className={videoStyles.responsiveIframe}
              title="Project Airtime | Donna"
              type="text/html"
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/3HqPbHUSeU4"
              srcDoc="
                <style>
                  * {
                    padding: 0;
                    margin: 0;
                    overflow: hidden
                  }
                  img:first-child {
                    position:absolute;
                    top: calc(50vh - 36px);
                    left: calc(50vw - 36px);
                  }
                  img:nth-child(2) {
                    width: 100%;
                    height: auto
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
                <a href='https://www.youtube-nocookie.com/embed/3HqPbHUSeU4?autoplay=1'>
                  <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAA8FBMVEUAAAAAAADq6ur6+voAAAAuLi4GBgYAAABfX18AAAD19fUAAACenp7z8/Pw8PBOTk4REREAAAAAAAAAAADc3Nyvr69mZmZHR0cAAAAAAAAAAAAWFhYMDAwAAACjo6Nvb29sbGz8/Pzs7Ozp6emxsbFAQEAmJibQ0NDNzc3CwsK8vLyZmZkpKSkAAAAAAAAAAAAAAAAAAAAAAAAAAACgoKA7OzvHx8fFxcWAgIDm5uZYWFhUVFRLS0snJycODg4AAAAAAADl5eXY2NjExMSWlpaVlZUAAAAAAAAAAAAAAACoqKgAAACDg4MyMjIAAAD///9SmF7MAAAAT3RSTlOzAPf9Br20lMqn+7Dc+vnFt6yjgfHhy8NoR0G4tizezs3++Pbiwrvt7Ofm2rxYUU4lGxML3MDq6dP1x8fEvLZ8MfXw6NnZmolgPN+g0757xSwr/gAAA8RJREFUeAGtmGdT21oXhVdUJKsIW+7YuBcKpmBsTIeXlwtJSLL+/7+5xxLMBaxyRPx8Y0bzDPvI2mfvhW8JHG9+/2O++ID/Yv75vnmc9GysaHp0Z+ET1t3RNJtIazwjGqfU0KRFpwdFBOgdd7es2KStlHfdjo6A4sGplEg7DEu6rCj8hFK5DEs81NJFrScIxu6AkQzcMQRPrRSRVg9KqqhcYp/td2vjAlAY17r7ZzaXqJWgxLqWJDoxARRmvaCO9rWBDxjX7QEFvVkBgHkSL7q3AFQVCrZzBiIwctsUKFUA1n2cqOEAWz8p2MkjlvwOBT+3AKcRLdoEMHkg2e8gkU6f5MMEwGaU6IcDjPok95pIoblHsj8CnB+ropYD1DxS/QUJfqmkVwOc1mfRiQXMbdK+ghR5j7TngHXyUaSZwFghN0aQZLRBKmPA1D6I6sBtmbRHkGZkk+VboP5e1AJQIdUrZOBKJYcAWu9EJlAleY5MnJOsAuZ/okOgoJB7yMgeqRSAwzfRqQXMSKWJjDQVcgZYp6+iA0DvkVVkpkr2dOAgFGnF4KR38AV2gvMuaoGoAdyoZB5fIE+qN0AjEJUAl9zGl9gmXaC0FE0dGBtkDqv8X0caOXLDgDMVoqO3v1ah+s8WEgn+h0vgSIhKwVG3EQHJ/+WQTJusACUh8oFBzFFzSUp9eXIA+BqOAZ20jVhRSn2GTeoQmk2gQ54hXpRS3xnZgdDUAZfcTxCl1LdPuhCaErBLdlNECfV1yV3gDibwQNZSRAn11cgyYKIYvLRxiiihvjHZB4rwAY8spIgS6iuQNuBDoJJIESXVRxICJ5PoYlVkvIqsLKU9RpTWfC3tRf6wFzoimISHLf/6L1Jev+wP8jH5B1lCHZilfyKL1E9E6qO9kPloJdrIY2Ib8V7biOYDSlJjW6Q2NgXwtbRWeyHbalOa/6NM88+FzX+K2OtoIXsdYSpE356B2V9ekM9vV/ZkLVe2VgSG6xgi/nKs+Q0cvBu02l8dtNqAdbqu0W/9w2gwHg+zjsf5t/E4YmD35pBm7kUM7MEKMdnIskLMl09PAFNbXWpGWZeaUbDUxK1ZUid+HrtmhYvfXJFf/JR5sPjFraJlkv0uEun2SZZjV1HZ5fh6h4LhLeA0pNZ1RCK1rr8FCO0eBYPZaoDghgFCOwwQJCKNocol3kJEGnrTMJq6iDQWHpeow99hpCEVsty4CiNR3BsInu7XHvvIB1F9mz3vQjqIyh6NyYd1JR+f8EtZw7oQTcSHd2bRB/yieSfiQy3h4X8BIjMI7XNyKGoAAAAASUVORK5CYII=' alt='Play'>
                  <img src='https://i.ytimg.com/vi/3HqPbHUSeU4/maxresdefault.jpg' alt='Thumbnail'>
                </a>"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
            <h3>Donna</h3>
          </div>

          {/* Larry */}
          <div className={videoStyles.responsiveContainer}>
            <iframe
              className={videoStyles.responsiveIframe}
              title="Project Airtime | Larry"
              type="text/html"
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/VzrlexXcEtM"
              srcDoc="
                <style>
                  * {
                    padding: 0;
                    margin: 0;
                    overflow: hidden
                  }
                  img:first-child {
                    position:absolute;
                    top: calc(50vh - 36px);
                    left: calc(50vw - 36px);
                  }
                  img:nth-child(2) {
                    width: 100%;
                    height: auto
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
                <a href='https://www.youtube-nocookie.com/embed/VzrlexXcEtM?autoplay=1'>
                  <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAA8FBMVEUAAAAAAADq6ur6+voAAAAuLi4GBgYAAABfX18AAAD19fUAAACenp7z8/Pw8PBOTk4REREAAAAAAAAAAADc3Nyvr69mZmZHR0cAAAAAAAAAAAAWFhYMDAwAAACjo6Nvb29sbGz8/Pzs7Ozp6emxsbFAQEAmJibQ0NDNzc3CwsK8vLyZmZkpKSkAAAAAAAAAAAAAAAAAAAAAAAAAAACgoKA7OzvHx8fFxcWAgIDm5uZYWFhUVFRLS0snJycODg4AAAAAAADl5eXY2NjExMSWlpaVlZUAAAAAAAAAAAAAAACoqKgAAACDg4MyMjIAAAD///9SmF7MAAAAT3RSTlOzAPf9Br20lMqn+7Dc+vnFt6yjgfHhy8NoR0G4tizezs3++Pbiwrvt7Ofm2rxYUU4lGxML3MDq6dP1x8fEvLZ8MfXw6NnZmolgPN+g0757xSwr/gAAA8RJREFUeAGtmGdT21oXhVdUJKsIW+7YuBcKpmBsTIeXlwtJSLL+/7+5xxLMBaxyRPx8Y0bzDPvI2mfvhW8JHG9+/2O++ID/Yv75vnmc9GysaHp0Z+ET1t3RNJtIazwjGqfU0KRFpwdFBOgdd7es2KStlHfdjo6A4sGplEg7DEu6rCj8hFK5DEs81NJFrScIxu6AkQzcMQRPrRSRVg9KqqhcYp/td2vjAlAY17r7ZzaXqJWgxLqWJDoxARRmvaCO9rWBDxjX7QEFvVkBgHkSL7q3AFQVCrZzBiIwctsUKFUA1n2cqOEAWz8p2MkjlvwOBT+3AKcRLdoEMHkg2e8gkU6f5MMEwGaU6IcDjPok95pIoblHsj8CnB+ropYD1DxS/QUJfqmkVwOc1mfRiQXMbdK+ghR5j7TngHXyUaSZwFghN0aQZLRBKmPA1D6I6sBtmbRHkGZkk+VboP5e1AJQIdUrZOBKJYcAWu9EJlAleY5MnJOsAuZ/okOgoJB7yMgeqRSAwzfRqQXMSKWJjDQVcgZYp6+iA0DvkVVkpkr2dOAgFGnF4KR38AV2gvMuaoGoAdyoZB5fIE+qN0AjEJUAl9zGl9gmXaC0FE0dGBtkDqv8X0caOXLDgDMVoqO3v1ah+s8WEgn+h0vgSIhKwVG3EQHJ/+WQTJusACUh8oFBzFFzSUp9eXIA+BqOAZ20jVhRSn2GTeoQmk2gQ54hXpRS3xnZgdDUAZfcTxCl1LdPuhCaErBLdlNECfV1yV3gDibwQNZSRAn11cgyYKIYvLRxiiihvjHZB4rwAY8spIgS6iuQNuBDoJJIESXVRxICJ5PoYlVkvIqsLKU9RpTWfC3tRf6wFzoimISHLf/6L1Jev+wP8jH5B1lCHZilfyKL1E9E6qO9kPloJdrIY2Ib8V7biOYDSlJjW6Q2NgXwtbRWeyHbalOa/6NM88+FzX+K2OtoIXsdYSpE356B2V9ekM9vV/ZkLVe2VgSG6xgi/nKs+Q0cvBu02l8dtNqAdbqu0W/9w2gwHg+zjsf5t/E4YmD35pBm7kUM7MEKMdnIskLMl09PAFNbXWpGWZeaUbDUxK1ZUid+HrtmhYvfXJFf/JR5sPjFraJlkv0uEun2SZZjV1HZ5fh6h4LhLeA0pNZ1RCK1rr8FCO0eBYPZaoDghgFCOwwQJCKNocol3kJEGnrTMJq6iDQWHpeow99hpCEVsty4CiNR3BsInu7XHvvIB1F9mz3vQjqIyh6NyYd1JR+f8EtZw7oQTcSHd2bRB/yieSfiQy3h4X8BIjMI7XNyKGoAAAAASUVORK5CYII=' alt='Play'>
                  <img src='https://i.ytimg.com/vi/VzrlexXcEtM/maxresdefault.jpg' alt='Thumbnail'>
                </a>"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
            <h3>Larry</h3>
          </div>
        </div>
      </Container>
    </section>
  )
}
