import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import User from "./User";
import Submissions from "./Submissions";

const PaginationWorks = props => {
  console.log("Logging from pagination");
  console.log("Paginations", props);
  return <div>The Pagination works :Dx </div>;
};

const CommentsWork = props => {
  console.log("Logging from comments");
  console.log("Comments", props);

  return <div>The Comments works :D </div>;
};

const NotFound = props => {
  console.log("Logging from not found");
  return <div>The Comments works :D </div>;
};

const CategoryRouter = ({ match }) => {
  switch (match.params.category) {
    case "submissions": {
      return (
        <Route
          exact
          path={`/user/:submissions/:userName/:page`}
          component={PaginationWorks}
        />
      );
    }
    case "comments": {
      return (
        <Route
          exact
          path={`/user/:comments/:userName/:page`}
          component={CommentsWork}
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
  return <div>This is the Category Router :D </div>;
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
