import React, { Component } from "react";
import Page from "./Page";
import { getStories } from "../services/hackernewsapi";

class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDisplay: 0,
      stories: []
    };
    this.page = props.match.match.params.page || 0;
  }

  componentDidMount() {
    this.updateStoryItems(this.props.category)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.setState({ stories: [] });
      this.updateStoryItems(this.props.category);
    }
  }

  updateStoryItems(category) {
    getStories(category).then(rawStories => {
      let stories = this.getItems(rawStories, this.page).map(story => {
        return { story: story.item.val(), index: story.index };
      });
      this.setState({ stories });
    });
  }

  getItems(stories, pageNumber, itemsPerPage = 50) {
    let currentStart = itemsPerPage * pageNumber;
    let currentItems = stories
      .slice(currentStart, currentStart + itemsPerPage)
      .map((story, index) => {
        return { item: story, index: index + currentStart };
      });
    return currentItems;
  }

  render() {
    return (
      <div className="container">
        <Page items={this.state.stories} />
        <div className="pagination">More</div>
      </div>
    );
  }
}

export default Stories;
