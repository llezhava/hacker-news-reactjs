import React from "react";
import { Route, Switch } from "react-router-dom";

import User from "./User";
import Submissions from "./Submissions";
import Comments from "./Comments";
import NotFound from "../common/NotFound";

const CategoryRouter = ({ match }) => {
  console.log("Match", match);

  switch (match.params.category) {
    case "submissions": {
      console.log("Matched Submissions!");
      return (
        <Switch>
          <Route
            exact path={`/user/:submissions/:userName/`}
            component={Submissions}
          />
          <Route
            exact path={`/user/:submissions/:userName/page/:page`}
            component={Submissions}
          />
        </Switch>
      );
    }
    case "comments": {
      console.log("Matched Comments!");
      return (
        <Switch>
          <Route
            exact path={`/user/:comments/:userName/`}
            component={Comments}
          />
           <Route
            exact path={`/user/:comments/:userName/page/:page`}
            component={Comments}
          />
        </Switch>
      );
    }
    default: {
      console.log("Did not match!");

      return <Route component={NotFound} />;
    }
  }
};

const StoriesRouter = ({ match, location, category }) => {

  return (
    <Switch>
      <Route
        exact
        path={`/user/:name`}
        component={User}
      />
      <Route
        exact
        path={`/user/:category/:userName`}
        component={CategoryRouter}
      />
      <Route
        exact
        path={`/user/:category/:userName/page/:page`}
        component={CategoryRouter}
      />
      <Route component={NotFound} />
    </Switch>
  );
};

export default StoriesRouter;
