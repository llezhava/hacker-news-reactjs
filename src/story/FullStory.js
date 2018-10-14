import React, { Component } from "react";
import Card from "./Card";
import Comments from "../comments/Comments"
import * as api from "../services/hackernewsapi";

class FullStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemData: {},
      comments: [],
      hasError: false
    };
    this.getItemData(props.match.params.id);
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
  }


  getItemData(id) {
    let itemData = api.getItem(id);
    itemData.then(i => {
      let itemData = i.val();
      this.setState({ itemData });
    });
  }

  render() {
    if(this.state.hasError) {
      return <div className="error">Error occured!</div>
    }
    return (
      <div className="fullStory">
        <Card {...this.state.itemData} />
        <Comments storyId={this.props.match.params.id} />
      </div>
    );
  }
}
export default FullStory;
