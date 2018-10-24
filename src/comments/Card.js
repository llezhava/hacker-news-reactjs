import React from "react";
import { Link, Route } from "react-router-dom";
import * as timeOperations from "../services/timeOperations";
import styles from "./comments.module.css"

function Card({ id, by, time, toggleVisible, isVisible }) {
  return (
      <div className={styles.card}>
       by  <Link to={{pathname: `/user/${by}`}}>{by}</Link> | {timeOperations.timesAgo(time)} |<button onClick={toggleVisible}>{isVisible ? "Hide" : `Show ${countChildren(id)}`}</button>
      </div>
  );
}

function countChildren(id) {
    let currentComment = document.getElementById(id)
    let totalChildren = currentComment.getElementsByClassName("commentText").length
    return totalChildren
}
export default Card;