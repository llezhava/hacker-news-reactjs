import React, { Component } from "react";
import { getItems, getUserData } from "../services/hackernewsapi";

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
    this.state = {data: [], isFetching: true}
  }

  componentDidMount() {
    let userName = this.props.match.params.userName
    this.getUserSubmissions(userName)
  }

  getUserSubmissions(userName) {

  }

  render() {
    return <div>Here will be submissions of the user</div>;
  }
}

export default Submissions;
