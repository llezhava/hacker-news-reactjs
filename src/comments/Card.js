import React from "react";
import { Link, Route } from "react-router-dom";

import * as timeOperations from "../services/timeOperations";

function Card({ by, time, toggleVisible, isVisible, kids }) {
let kidsNormalized = kids ? kids.length : 0
  return (
      <div className="meta">
       by  <Link to={{pathname: `/user/${by}`}}>{by}</Link> | {timeOperations.timesAgo(time)} |<button onClick={toggleVisible}>{isVisible ? "Hide" : `Show ${kidsNormalized}`}</button>
      </div>
  );
}

export default Card;