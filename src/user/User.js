import React, { Component } from "react";
import { getUserData } from "../services/hackernewsapi";
import { Route, Switch } from "react-router-dom";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "", created: "", karma: "", about: undefined };
    this.updateUser(props.match.params.name);
  }

  updateUser(userName) {
    if (!userName) return undefined;
    getUserData(userName).then(data => {
      let val = data.val();
      this.setState({
        id: val.id,
        created: val.created,
        karma: val.karma,
        about: val.about
      });
    });
  }

  render() {
    return (
      <div className="user">
        <li>User: {this.state.id}</li>
        <li>Created: {this.state.created} </li>
        <li>Karma: {this.state.karma}</li>
        {this.state.about ? <li>About: {this.state.about}</li> : ""}
        <li>Submissions</li>
        <li>Comments</li>
        {/* <Route
          path={match.url}
          render={routes => (
            <Stories category={category} match={match} {...routes} />
          )}
        /> */}

        {/* <Route path={`/submissions/:userName`} render={<Comments} /> */}
      </div>
    );
  }
}

export default User;
