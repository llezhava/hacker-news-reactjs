import React, { Component } from "react";
import Card from "./Card";
import getComments from "../services/getComments";
import * as api from "../services/hackernewsapi";

class FullStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemData: {},
      comments: []
    };
    this.getItemData(props.match.params.id);
    this.getComments(props.match.params.id)
  }

  getItemData(id) {
    let itemData = api.getItem(id);
    itemData.then(i => {
      let itemData = i.val();
      this.setState({ itemData });
    });
  }

  getComments(id) {
    let comments = getComments(id);
    comments.then(i => {
        console.log("Comments: ",i)
    });
  }

  render() {
    return (
      <div className="fullStory">
        <Card {...this.state.itemData} />
      </div>
    );
  }
}
export default FullStory;
