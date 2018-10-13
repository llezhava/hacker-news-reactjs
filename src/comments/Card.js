import React from "react";
import { Link, Route } from "react-router-dom";

import * as timeOperations from "../services/timeOperations";

function Card({ by, time, toggleVisible, isVisible }) {
  return (
      <div className="meta">
        {by} | {timeOperations.timesAgo(time)} |<button onClick={toggleVisible}>{isVisible ? "Hide" : "Show"}</button>
      </div>
  );
}

export default Card;
