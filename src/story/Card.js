import React from "react";
import { Link } from "react-router-dom";

function getMsDifference(ms) {
  let currentDate = new Date().getTime();
  let newDate = new Date(ms);
  let compare = currentDate - newDate;
  return compare;
}

function getTimeDifference(ms) {
  let minutes = Math.floor(ms / 1000 / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  if (minutes < 60) return `${minutes} minutes ago`;
  else if (hours < 24) return `${hours} hours ago`;
  else return `${days} days ago`;
}

function timesAgo(unix) {
    let ms = unix * 1000
    let msDifference = getMsDifference(ms)
    let timeDifference = getTimeDifference(msDifference)
    return timeDifference

}

function Card({ by, descendants, id, score, time, title, url, index }) {
  return (
    <div className="story">
      {index} index
      <a href={url}>
        <h3>{title}</h3>
      </a>
      <div className="storyMeta">
        {score} points | by {by} {timesAgo(time)} |{" "}
        <Link to="/itemID/comments">{descendants} comments.</Link>
      </div>
    </div>
  );
}

export default Card;
