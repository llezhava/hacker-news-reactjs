import React, { Component } from "react";
import Card from "./Card";
import Comments from "../comments/Comments"
import * as api from "../services/hackernewsapi";

class FullStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemData: {},
      comments: []
    };
    this.getItemData(props.match.params.id);
  }

  getItemData(id) {
    let itemData = api.getItem(id);
    itemData.then(i => {
      let itemData = i.val();
      this.setState({ itemData });
    });
  }

  render() {
    return (
      <div className="fullStory">
        <Card {...this.state.itemData} />
        <Comments storyId={this.props.match.params.id} />
      </div>
    );
  }
}
export default FullStory;
