import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import User from "./User";
import Submissions from "./Submissions"

const PaginationWorks = (props) => {
  console.log("Logging from pagination")
  return(<div>The Pagination works :D </div>)
}

const StoriesRouter = ({ match, location, category }) => {
  console.log("Match",match)
  console.log("Location",location)


  console.log("ROUTING...", category)

  return (
    <Switch>
      <Route exact path={`/user/:name`} component={User} />
      <Route exact path={`/user/submissions/:userName`} component={Submissions} />
      {/* <Route exact path={`/user/submissions/:userName`} component={PaginationWorks} /> */}

    </Switch>
  );
};



export default StoriesRouter;
