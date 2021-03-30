import React from "react"
import { Link } from "gatsby"
import videoStyles from "../styles/videoStyles.module.scss"

const YoutubeThumbnail = ({ link, videoId, caption }) => (
  <div>
    <div className={videoStyles.youtubeThumbnailContainer}>
      <Link to={link}>
        <img
          className={videoStyles.playButton}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAA8FBMVEUAAAAAAADq6ur6+voAAAAuLi4GBgYAAABfX18AAAD19fUAAACenp7z8/Pw8PBOTk4REREAAAAAAAAAAADc3Nyvr69mZmZHR0cAAAAAAAAAAAAWFhYMDAwAAACjo6Nvb29sbGz8/Pzs7Ozp6emxsbFAQEAmJibQ0NDNzc3CwsK8vLyZmZkpKSkAAAAAAAAAAAAAAAAAAAAAAAAAAACgoKA7OzvHx8fFxcWAgIDm5uZYWFhUVFRLS0snJycODg4AAAAAAADl5eXY2NjExMSWlpaVlZUAAAAAAAAAAAAAAACoqKgAAACDg4MyMjIAAAD///9SmF7MAAAAT3RSTlOzAPf9Br20lMqn+7Dc+vnFt6yjgfHhy8NoR0G4tizezs3++Pbiwrvt7Ofm2rxYUU4lGxML3MDq6dP1x8fEvLZ8MfXw6NnZmolgPN+g0757xSwr/gAAA8RJREFUeAGtmGdT21oXhVdUJKsIW+7YuBcKpmBsTIeXlwtJSLL+/7+5xxLMBaxyRPx8Y0bzDPvI2mfvhW8JHG9+/2O++ID/Yv75vnmc9GysaHp0Z+ET1t3RNJtIazwjGqfU0KRFpwdFBOgdd7es2KStlHfdjo6A4sGplEg7DEu6rCj8hFK5DEs81NJFrScIxu6AkQzcMQRPrRSRVg9KqqhcYp/td2vjAlAY17r7ZzaXqJWgxLqWJDoxARRmvaCO9rWBDxjX7QEFvVkBgHkSL7q3AFQVCrZzBiIwctsUKFUA1n2cqOEAWz8p2MkjlvwOBT+3AKcRLdoEMHkg2e8gkU6f5MMEwGaU6IcDjPok95pIoblHsj8CnB+ropYD1DxS/QUJfqmkVwOc1mfRiQXMbdK+ghR5j7TngHXyUaSZwFghN0aQZLRBKmPA1D6I6sBtmbRHkGZkk+VboP5e1AJQIdUrZOBKJYcAWu9EJlAleY5MnJOsAuZ/okOgoJB7yMgeqRSAwzfRqQXMSKWJjDQVcgZYp6+iA0DvkVVkpkr2dOAgFGnF4KR38AV2gvMuaoGoAdyoZB5fIE+qN0AjEJUAl9zGl9gmXaC0FE0dGBtkDqv8X0caOXLDgDMVoqO3v1ah+s8WEgn+h0vgSIhKwVG3EQHJ/+WQTJusACUh8oFBzFFzSUp9eXIA+BqOAZ20jVhRSn2GTeoQmk2gQ54hXpRS3xnZgdDUAZfcTxCl1LdPuhCaErBLdlNECfV1yV3gDibwQNZSRAn11cgyYKIYvLRxiiihvjHZB4rwAY8spIgS6iuQNuBDoJJIESXVRxICJ5PoYlVkvIqsLKU9RpTWfC3tRf6wFzoimISHLf/6L1Jev+wP8jH5B1lCHZilfyKL1E9E6qO9kPloJdrIY2Ib8V7biOYDSlJjW6Q2NgXwtbRWeyHbalOa/6NM88+FzX+K2OtoIXsdYSpE356B2V9ekM9vV/ZkLVe2VgSG6xgi/nKs+Q0cvBu02l8dtNqAdbqu0W/9w2gwHg+zjsf5t/E4YmD35pBm7kUM7MEKMdnIskLMl09PAFNbXWpGWZeaUbDUxK1ZUid+HrtmhYvfXJFf/JR5sPjFraJlkv0uEun2SZZjV1HZ5fh6h4LhLeA0pNZ1RCK1rr8FCO0eBYPZaoDghgFCOwwQJCKNocol3kJEGnrTMJq6iDQWHpeow99hpCEVsty4CiNR3BsInu7XHvvIB1F9mz3vQjqIyh6NyYd1JR+f8EtZw7oQTcSHd2bRB/yieSfiQy3h4X8BIjMI7XNyKGoAAAAASUVORK5CYII="
          alt="Play Button"
        />
        <img
          className={videoStyles.youtubeThumbnail}
          src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
          alt="Thumbnail"
          loading="lazy"
        />
      </Link>
    </div>
    <h3>{caption}</h3>
  </div>
)

export default YoutubeThumbnail
