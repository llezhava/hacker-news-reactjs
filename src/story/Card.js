import React from "react";
import { Link } from "react-router-dom";
import * as timeOperations from "../services/timeOperations"


function Card({ by, descendants, id, score, time, title, url, index }) {
  return (
    <div className="story">
      {index} index
      <a href={url}>
        <h3>{title}</h3>
      </a>
      <div className="storyMeta">
        {score} points | by {by} {timeOperations.timesAgo(time)} |{" "}
        <Link to="/itemID/comments">{descendants} comments.</Link>
      </div>
    </div>
  );
}

export default Card;
