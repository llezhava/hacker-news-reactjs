import React from "react";
import { Link } from "react-router-dom";
import styles from "./card.module.css";

import * as timeOperations from "../services/timeOperations";

const Card = props => {
  let { by, descendants, id, score, time, title, url, index } = props;
  return (
    <div className={styles.root}>
      {index !== undefined ? <div className={styles.index}>{index}.</div> : "" }
      <div className={styles.content}>
        <h3>
          <a href={url}>{title}</a>
        </h3>
        <div className={styles.meta}>
          {score} points | by <Link to={{ pathname: `/user/${by}` }}>{by}</Link>{" "}
          {timeOperations.timesAgo(time)} |{" "}
          <Link to={{ pathname: `/story/${id}` }}>{descendants} comments.</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
