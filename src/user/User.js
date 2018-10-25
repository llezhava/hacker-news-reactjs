import React, { Component } from "react";
import { getUserData } from "../services/hackernewsapi";
import { Link } from "react-router-dom";
import WaitingForData from "../common/WaitingForData"

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: undefined,
      created: undefined,
      karma: undefined,
      about: undefined,
      notFound: undefined
    };
    this.updateUser(props.match.params.name);
  }

  updateUser(userName) {
    if (!userName) return undefined;
    getUserData(userName).then(data => {
      if (!data) {
        this.setState({ notFound: true });
      } else {
        this.setState({
          id: data.id,
          created: data.created,
          karma: data.karma,
          about: data.about,
          notFound: undefined
        });
      }
    });
  }

  render() {
    if (this.state.notFound) {
      let {name} = this.props.match.params
      return <div>The user "{name}" is not found</div>;
    }

    return (
      <WaitingForData isFetching={!this.state.id}>
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
        <li>
          <Link to={{ pathname: `/user/submissions/${this.state.id}` }}>
            Submissions
          </Link>{" "}
        </li>
        <li>
          <Link to={{ pathname: `/user/comments/${this.state.id}` }}>
            Comments
          </Link>{" "}
        </li>
      </div>
      </WaitingForData>
    );
  }
}

export default User;
