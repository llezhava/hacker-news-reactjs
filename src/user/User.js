import React, { Component } from "react";
import { getUserData } from "../services/hackernewsapi";
import { Route, Switch, Router } from "react-router-dom";
import Submissions from "./Submissions";

const User = (props) => {
  return(<div> Under Reconstruction... </div>)
}

class User1 extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "", created: "", karma: "", about: undefined };
    this.updateUser(props.match.params.name);
  }

  updateUser(userName) {
    debugger;
    if (!userName) return undefined;
    getUserData(userName).then(data => {
      console.log(data);
      this.setState({
        id: data.id,
        created: data.created,
        karma: data.karma,
        about: data.about
      });
    });
  }

  render() {
    return (
      <div className="user">
        <li>User: {this.state.id}</li>
        <li>Created: {this.state.created} </li>
        <li>Karma: {this.state.karma}</li>
        {this.state.about ? (
          <li>
            About:{" "}
            <div dangerouslySetInnerHTML={{ __html: this.state.about }} />{" "}
          </li>
        ) : (
          ""
        )}
        <li>Submissions</li>
        <li>Comments</li>
        <Router>
          <Route
            path={`/submissions/:userName`}
            render={() => <Submissions />}
          />
        </Router>
      </div>
    );
  }
}

export default User;
