import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Stories from "./story/Stories";
import StoriesRouter from "./story/StoriesRouter"
import Header from "./common/Header";

import { getStories } from "./services/hackernewsapi";

import * as storyTypes from "./services/operationTypes";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />

         <Switch>
          <Route
            exact
            path="/"
            render={(props) => <StoriesRouter {...props} category={storyTypes.GET_BEST_STORIES} />}
          />
          <Route
            path="/new"
            render={(props) => <StoriesRouter  {...props} category={storyTypes.GET_NEW_STORIES} />}
          />
          <Route
            path="/top"
            render={(props) => <StoriesRouter  {...props} category={storyTypes.GET_TOP_STORIES} />}
          />
        </Switch>

        {/* <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Stories {...props} category={storyTypes.GET_BEST_STORIES} />}
          />
          <Route
            path="/new"
            render={(props) => <Stories  {...props} category={storyTypes.GET_NEW_STORIES} />}
          />
          <Route
            path="/top"
            render={(props) => <Stories  {...props} category={storyTypes.GET_TOP_STORIES} />}
          />
        </Switch> */}
      </div>
    );
  }
}

export default App;
