import React from "react";
import { Link, Route } from "react-router-dom";

import * as timeOperations from "../services/timeOperations";

const Card = (props) => {
  let { by, descendants, id, score, time, title, url, index } = props
  return (
    <div className="storyCard">
      {index} index
      <a href={url}>
        <h3>{title}</h3>
      </a>
      <div className="meta">
        {score} points | by  <Link to={{pathname: `/user/${by}`}}>{by}</Link> {timeOperations.timesAgo(time)} |{" "}
        <Link to={{pathname: `/story/${id}`}}>{descendants} comments.</Link>
      </div>
    </div>
  );
};

export default Card;