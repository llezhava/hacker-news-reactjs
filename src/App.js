import React, { Component } from "react";
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import styles from "./app.module.css";
import StoriesRouter from "./story/StoriesRouter";
import UserRouter from "./user/Router";
import Header from "./common/Header";
import FullStory from "./comments/FullStory";
import NotFound from "./common/NotFound";

import * as storyTypes from "./services/operationTypes";

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      
      <div>
        <div className={styles.container}>
          <Header />
          <Switch>
            <Route
              exact
              path={`/`}
              render={() => {
                return <Redirect to={`/top`} />;
              }}
            />

            <Route
              path={`/top`}
              render={props => (
                <StoriesRouter
                  {...props}
                  category={storyTypes.GET_TOP_STORIES}
                />
              )}
            />

            <Route
              path={`/best`}
              render={props => (
                <StoriesRouter
                  {...props}
                  category={storyTypes.GET_BEST_STORIES}
                />
              )}
            />
            <Route
              path={`/new`}
              render={props => (
                <StoriesRouter
                  {...props}
                  category={storyTypes.GET_NEW_STORIES}
                />
              )}
            />
            <Route exact path={`/story/:id`} component={FullStory} />
            <Route path={`/user/:name`} component={UserRouter} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
