import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../common/NotFound";


import Stories from "./Stories";

const StoriesRouter = ({ match, location, category }) => {

  console.log("ROUTING...", category, match.url, location)

  return (
    <Switch>
      <Route
        exact
        path={match.url}
        render={routes => <Stories category={category} match={match} {...routes} />}
      />
      <Route
        path={`${match.url}/page/:page`}
        render={routes => <Stories category={category} match={match} {...routes}/>}
      />
       <Route component={NotFound} />
    </Switch>
  );
};



export default StoriesRouter;
