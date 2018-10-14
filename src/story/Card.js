import React from "react";
import { Link, Route } from "react-router-dom";

import * as timeOperations from "../services/timeOperations";
import FullStory from "./FullStory";

function Card({ by, descendants, id, score, time, title, url, index }) {
  return (
    <div className="storyCard">
      {index} index
      <a href={url}>
        <h3>{title}</h3>
      </a>
      <div className="meta">
        {score} points | by {by} {timeOperations.timesAgo(time)} |{" "}
        <a href={`http://${window.location.host}/story/${id}`}>{descendants} comments.</a>
      </div>
    </div>
  );
}

export default Card;
