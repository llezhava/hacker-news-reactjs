import React from "react"
import {Link} from 'react-router-dom';


function Card({by, descendants, id, score, time, title, url, index}) {
    return(
        <div className="story">
        {index} index
        <a href={url}><h3>{title}</h3></a>
        <div className="storyMeta">
        {score} by {by} at {time}, {descendants} comments.
        </div>
        </div>
    )
}

export default Card