import React from "react";
import { Route, Switch } from "react-router-dom";

import User from "./User";
import Submissions from "./Submissions";
import Comments from "./Comments"
import NotFound from "../common/NotFound"

const CategoryRouter = ({ match }) => {
  switch (match.params.category) {
    case "submissions": {
      return (
        <Route
          exact
          path={`/user/:submissions/:userName/:page`}
          component={Submissions}
        />
      );
    }
    case "comments": {
      return (
        <Route
          exact
          path={`/user/:comments/:userName/:page`}
          component={Comments}
        />
      );
    }
    default: {
      return (
        <Route
          exact
          path={`/user/:category/:userName/:page`}
          component={NotFound}
        />
      );
    }
  }
};

const StoriesRouter = ({ match, location, category }) => {
  console.log("Match", match);
  // console.log("Location",location)

  // console.log("ROUTING...", category)

  return (
    <Switch>
      <Route exact path={`/user/:name`} component={User} />
      <Route
        exact
        path={`/user/:submissions/:userName`}
        component={Submissions}
      />
      <Route
        exact
        path={`/user/:category/:userName/:page`}
        component={CategoryRouter}
      />
    </Switch>
  );
};

export default StoriesRouter;
