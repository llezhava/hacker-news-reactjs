import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Stories from "./Stories";

const StoriesRouter = ({ match, location, category }) => {

  console.log("ROUTING...", category)

  return (
    <Switch>
      <Route
        exact
        path={match.url}
        render={routes => <Stories category={category} match={match} {...routes} />}
      />
      <Route
        path={`${match.url}/:page`}
        render={routes => <Stories category={category} match={match} {...routes}/>}
      />
    </Switch>
  );
};

/**
 * TODO: Make Pagination component
 * call it from the pagination component
 */

export default StoriesRouter;
