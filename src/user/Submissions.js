import React, { Component } from "react";
import { getItems, getUserData } from "../services/hackernewsapi";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

const PaginationWorks = props => {
  console.log("Logging from pagination");
  return <div>The Pagination works :D </div>;
};

let filter = i => i.type === "story";

function getData(userName, filter) {
  return getUserData(userName)
    .then(userData => {
      let listOfItems = userData.val().submitted;
      return getUserData(listOfItems);
    })
    .then(listOfItems => {
      return listOfItems.map(i => i.val()).filter(filter);
    });
}

class Submissions extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], isFetching: true };
  }

  componentDidMount() {
    let userName = this.props.match.params.userName;

    console.log(userName, this.props);
    // this.getUserSubmissions(userName)
  }

  getUserSubmissions(userName) {}

  render() {
    return (
      <div>
        Here will be submissions of the user
        <Route
          path={`${this.props.match.url}/:page`}
          component={PaginationWorks}
        />
      </div>
    );
  }
}

export default Submissions;
